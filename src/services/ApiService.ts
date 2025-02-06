import { DayReportData, DaySummaryData } from "@/components/SummaryTableBody";
import { ReportUsecase } from "@/usecases/reportUsecase";
import { WorkdayUsecase } from "@/usecases/workdayUsecase";
import { AxiosResponse } from "axios";
import { ToastService } from "./ToastService";
import { AdministratorUsecase } from "@/usecases/administratorUsecase";

const { showToast, dismissToast } = ToastService;

export class ApiService {
    private workdayUsecase;
    private reportUsecase;
    private administratorUsecase;

    constructor() {
        this.workdayUsecase = new WorkdayUsecase();
        this.reportUsecase = new ReportUsecase();
        this.administratorUsecase = new AdministratorUsecase();
    }

    async login(
        login: string,
        password: string,
        callBack: Function
    ): Promise<AxiosResponse | null> {
        try {
            if (!login || !password) {
                throw new Error("Preencha todos os campos!");
            }

            showToast("Efetuando login", "Por favor aguarde", "loading");

            const result = await this.administratorUsecase.login(
                login,
                password
            );

            dismissToast();

            const session_token = result?.data.session_token;

            if (result && session_token != null) {
                result.data.session_token = `Bearer ${session_token}`;
                showToast("Login bem sucedido!", "Tudo certo", "success");
            } else {
                showToast("Falha durante login", "Tente novamente!", "error");
            }

            return result || null;
        } catch (err: any) {
            dismissToast();

            showToast("Falha durante login", `${err}`, "error");
            return null;
        } finally {
            callBack();
        }
    }

    async checkpoint(
        cpf: string,
        callBack: Function
    ): Promise<AxiosResponse | null> {
        let success = false;
        try {
            if (!cpf) {
                throw new Error("Cpf é obrigatório!");
            }

            showToast("Efetuando Registro", "Por favor aguarde", "loading");

            const result = await this.workdayUsecase.checkpoint(cpf);

            dismissToast();

            if (result?.data != null) {
                success = true;
                showToast("Registrado com sucesso", "Tudo certo", "success");
            } else {
                showToast("Falha ao registrar", "Tente novamente!", "error");
            }

            return result || null;
        } catch (err: any) {
            dismissToast();

            showToast("Falha ao registrar ", `${err}`, "error");
            return null;
        } finally {
            callBack(success);
        }
    }

    async getTodaySummary(): Promise<DaySummaryData[]> {
        try {
            const result = await this.reportUsecase.getTodaySummary();

            return result.data;
        } catch (err: any) {
            throw new Error(err);
        }
    }

    async getTodayReport(): Promise<DayReportData[]> {
        try {
            const result = await this.reportUsecase.getDayReport();

            return result.data;
        } catch (err: any) {
            throw new Error(err);
        }
    }
}
