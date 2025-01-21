import { AxiosResponse } from "axios";

export interface WorkdayApiInterface {
    checkIn(cpf: string): Promise<AxiosResponse | null>;
}
