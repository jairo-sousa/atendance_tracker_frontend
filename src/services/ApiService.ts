import {
    DayReportData,
    DaySummaryData,
} from "@/components/workDaySummary/SummaryTableBody";
import { AxiosResponse } from "axios";
import { ToastService } from "./ToastService";
import { WorkdayApiInterface } from "@/interfaces/WorkdayInterface";
import { WorkdayApi } from "@/api/WorkdayApi";
import { ReportApi } from "@/api/ReportApi";
import { AdministratorApi } from "@/api/AdministratorApi";
import { ReportApiInterface } from "@/interfaces/ReportInterface";
import { AdministratorApiInterface } from "@/interfaces/AdministratorInterface";
import { ModelApiInterface } from "@/interfaces/ModelInterface";
import { ModelApi } from "@/api/ModelApi";

const { showToast, dismissToast } = ToastService;

export class ApiService {
    private workdayApi: WorkdayApiInterface;
    private reportApi: ReportApiInterface;
    private administratorApi: AdministratorApiInterface;
    private modelApi: ModelApiInterface;

    constructor() {
        this.workdayApi = new WorkdayApi();
        this.reportApi = new ReportApi();
        this.administratorApi = new AdministratorApi();
        this.modelApi = new ModelApi();
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

            const result = await this.administratorApi.login(login, password);

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

    async logout(
        sessionToken: string,
        callBack?: Function
    ): Promise<AxiosResponse | null> {
        try {
            if (!sessionToken) {
                throw new Error("Erro inesperado!");
            }

            showToast("Efetuando Logout", "Por favor aguarde", "loading");
            const result = await this.administratorApi.logout(sessionToken);

            dismissToast();

            const session_token = result?.data.session_token;

            if (result && session_token == null) {
                showToast("Logout bem sucedido!", "Tudo certo", "success");
            } else {
                showToast("Falha durante Logout", sessionToken, "error");
            }

            return result || null;
        } catch (err: any) {
            dismissToast();

            showToast("Falha durante Logout", `${err}`, "error");
            return null;
        } finally {
            callBack && callBack();
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

            const result = await this.workdayApi.checkpoint(cpf);

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
            const result = await this.reportApi.getTodaySummary();

            return result.data;
        } catch (err: any) {
            throw new Error(err);
        }
    }

    async getTodayReport(): Promise<DayReportData[]> {
        try {
            const result = await this.reportApi.getTodayReport();

            return result.data;
        } catch (err: any) {
            throw new Error(err);
        }
    }

    // CRUD
    async get(
        sessionToken: string,
        route: string,
        callBack?: Function
    ): Promise<AxiosResponse | null> {
        try {
            if (!sessionToken || !route) throw new Error("Erro inesperado!");

            const result = await this.modelApi.get(sessionToken, route);

            if (!result) {
                showToast("Falha durante busca", sessionToken, "error");
            }

            return result || null;
        } catch (err: any) {
            dismissToast();

            showToast("Falha durante busca de dados", `${err}`, "error");
            return null;
        } finally {
            callBack && callBack();
        }
    }
}
