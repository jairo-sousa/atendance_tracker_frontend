import { DayReportData, DaySummaryData } from "@/components/SummaryTableBody";
import { ReportUsecase } from "@/usecases/reportUsecase";
import { WorkdayUsecase } from "@/usecases/workdayUsecase";
import { AxiosResponse } from "axios";
import { ToastService } from "./ToastService";

const { showToast, dismissToast } = ToastService;

export class ApiService {
    private workdayUsecase;
    private reportUsecase;

    constructor() {
        this.workdayUsecase = new WorkdayUsecase();
        this.reportUsecase = new ReportUsecase();
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
