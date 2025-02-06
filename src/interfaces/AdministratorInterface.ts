import { AxiosResponse } from "axios";

export interface AdministratorApiInterface {
    login(login: string, password: string): Promise<AxiosResponse | null>;
}
