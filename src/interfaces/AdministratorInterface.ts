import { AxiosResponse } from "axios";

export interface AdministratorApiInterface {
    login(login: string, password: string): Promise<AxiosResponse | null>;
    logout(sessionToken: string): Promise<AxiosResponse | null>;
    backup(sessionToken: string): Promise<AxiosResponse | null>;
    restore(sessionToken: string, file: File): Promise<AxiosResponse | null>;
}
