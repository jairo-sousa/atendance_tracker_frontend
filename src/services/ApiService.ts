import { AxiosResponse } from "axios";
import { ToastService } from "./ToastService";
import { ReportApi } from "@/api/ReportApi";
import { AdministratorApi } from "@/api/AdministratorApi";
import {
    DayReportData,
    DaySummaryData,
    PeriodReportData,
    ReportApiInterface,
} from "@/interfaces/ReportInterface";
import { AdministratorApiInterface } from "@/interfaces/AdministratorInterface";
import { ModelApiInterface } from "@/interfaces/ModelInterface";
import { ModelApi } from "@/api/ModelApi";
import { EntityBase } from "@/interfaces/EntityInterface";
import { DayApiInterface } from "@/interfaces/DayInterface";
import { DayApi } from "@/api/DayApi";

const { showToast, dismissToast } = ToastService;

export class ApiService {
    private DayApi: DayApiInterface;
    private reportApi: ReportApiInterface;
    private administratorApi: AdministratorApiInterface;
    private modelApi: ModelApiInterface;

    constructor() {
        this.DayApi = new DayApi();
        this.reportApi = new ReportApi();
        this.administratorApi = new AdministratorApi();
        this.modelApi = new ModelApi();
    }

    async signUp(
        login: string,
        password: string,
        callBack: Function
    ): Promise<AxiosResponse | null> {
        try {
            if (!login || !password) {
                throw new Error("Preencha todos os campos!");
            }

            showToast("Criando usuário", "Por favor aguarde", "loading");

            const result = await this.administratorApi.signUp(login, password);

            dismissToast();

            const user = result?.data;

            if (user) {
                showToast("Usuário criado!", "Faça o login!", "success");
            } else {
                showToast("Falha na criação", "Tente novamente!", "error");
            }

            return result || null;
        } catch (err: any) {
            dismissToast();

            showToast("Falha na criação", `${err}`, "error");
            return null;
        } finally {
            callBack();
        }
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

            const sessionToken = result?.data.sessionToken;

            if (result && sessionToken != null) {
                result.data.sessionToken = `Bearer ${sessionToken}`;
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

            const resultToken = result?.data.sessionToken;

            if (result && resultToken == null) {
                showToast("Logout bem sucedido!", "Tudo certo", "success");
            } else {
                showToast("Falha durante Logout", resultToken, "error");
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

            const result = await this.DayApi.checkpoint(cpf);

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

    async getPeriodReport(
        employeeId: string,
        periodValue: string,
        startDate: string,
        endDate: string,
        sessionToken: string
    ): Promise<PeriodReportData> {
        try {
            const result = await this.reportApi.getPeriodReport(
                employeeId,
                periodValue,
                startDate,
                endDate,
                sessionToken
            );

            return result.data;
        } catch (err: any) {
            throw new Error(err);
        }
    }

    // CRUD
    async create(
        sessionToken: string,
        route: string,
        data: EntityBase,
        callBack?: Function
    ): Promise<AxiosResponse | null> {
        try {
            if (!sessionToken || !route) throw new Error("Erro inesperado!");
            if (!data) throw new Error("Forneça os dados para a criação!");

            showToast("Salvando dados", "Por favor aguarde", "loading");
            const result = await this.modelApi.create(
                sessionToken,
                route,
                data
            );

            dismissToast();

            if (result) {
                showToast("Dados salvos!", "Tudo certo", "success");
            } else {
                showToast("Falha ao salvar dados", "Erro no servidor", "error");
            }

            return result || null;
        } catch (err: any) {
            dismissToast();

            showToast("Falha ao salvar dados", `${err}`, "error");
            return null;
        } finally {
            callBack && callBack();
        }
    }

    async get(
        sessionToken: string,
        route: string,
        param?: string,
        callBack?: Function
    ): Promise<AxiosResponse | null> {
        try {
            if (!sessionToken || !route) throw new Error("Erro inesperado!");

            const result = await this.modelApi.get(sessionToken, route, param);

            if (!result) {
                showToast("Falha durante busca", "Erro no servidor", "error");
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

    async update(
        sessionToken: string,
        route: string,
        data: EntityBase,
        callBack?: Function
    ): Promise<AxiosResponse | null> {
        try {
            if (!sessionToken || !route) throw new Error("Erro inesperado!");
            if (!data) throw new Error("Forneça os dados para a edição!");

            showToast("Atualizando dados", "Por favor aguarde", "loading");
            const result = await this.modelApi.update(
                sessionToken,
                route,
                data
            );

            dismissToast();

            if (result) {
                showToast("Dados atualizados!", "Tudo certo", "success");
            } else {
                showToast(
                    "Falha ao atualizar dados",
                    "Erro no servidor",
                    "error"
                );
            }

            return result || null;
        } catch (err: any) {
            dismissToast();

            showToast("Falha ao atualizar dados", `${err}`, "error");
            return null;
        } finally {
            callBack && callBack();
        }
    }

    async delete(
        sessionToken: string,
        route: string,
        id: string,
        callBack?: Function
    ): Promise<AxiosResponse | null> {
        try {
            if (!sessionToken || !route || !id)
                throw new Error("Erro inesperado!");

            showToast("Removendo dado", "Por favor aguarde", "loading");
            const result = await this.modelApi.delete(sessionToken, route, id);

            dismissToast();

            if (result) {
                showToast("Dado removido!", "Tudo certo", "success");
            } else {
                showToast("Falha ao remover dado", "Erro no servidor", "error");
            }

            return result || null;
        } catch (err: any) {
            dismissToast();

            showToast("Falha ao remover dado", `${err}`, "error");
            return null;
        } finally {
            callBack && callBack();
        }
    }

    async backup(
        sessionToken: string,
        callBack?: Function
    ): Promise<AxiosResponse | null> {
        try {
            if (!sessionToken) throw new Error("Erro inesperado!");

            showToast("Fazendo backup", "Por favor aguarde", "loading");
            const result = await this.administratorApi.backup(sessionToken);

            dismissToast();

            if (result) {
                showToast("Backup realizado!", "Tudo certo", "success");
            } else {
                showToast("Falha ao fazer backup", "Erro no servidor", "error");
            }

            return result || null;
        } catch (err: any) {
            dismissToast();

            showToast("Falha ao fazer backup", `${err}`, "error");
            return null;
        } finally {
            callBack && callBack();
        }
    }

    async restore(
        sessionToken: string,
        file: File,
        callBack?: Function
    ): Promise<AxiosResponse | null> {
        try {
            if (!sessionToken) throw new Error("Erro inesperado!");

            showToast("Restaurando backup", "Por favor aguarde", "loading");
            const result = await this.administratorApi.restore(
                sessionToken,
                file
            );

            dismissToast();

            if (result) {
                showToast("Backup Restaurado!", "Tudo certo", "success");
            } else {
                showToast(
                    "Falha ao Restaurar backup",
                    "Erro no servidor",
                    "error"
                );
            }

            return result || null;
        } catch (err: any) {
            dismissToast();

            showToast("Falha ao Restaurar backup", `${err}`, "error");
            return null;
        } finally {
            callBack && callBack();
        }
    }
}
