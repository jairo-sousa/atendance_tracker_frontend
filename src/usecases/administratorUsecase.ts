import { AdministratorApi } from "@/api/AdministratorApi";
import { AdministratorApiInterface } from "@/interfaces/AdministratorInterface";
import { AxiosResponse } from "axios";

export class AdministratorUsecase {
    private administrator: AdministratorApiInterface;

    constructor() {
        this.administrator = new AdministratorApi();
    }

    async login(
        login: string,
        password: string
    ): Promise<AxiosResponse | null> {
        const result = await this.administrator.login(login, password);

        return result;
    }

    async logout(session_token: string): Promise<AxiosResponse | null> {
        const result = await this.administrator.logout(session_token);

        return result;
    }
}
