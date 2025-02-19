import { AxiosResponse } from "axios";

export interface ModelApiInterface {
    get(seession_token: string, route: string): Promise<AxiosResponse>;
}
