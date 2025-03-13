import { AxiosResponse } from "axios";

export interface AdministratorApiInterface {
    login(login: string, password: string): Promise<AxiosResponse | null>;
    logout(session_token: string): Promise<AxiosResponse | null>;
    backup(session_token: string): Promise<AxiosResponse | null>;
}
