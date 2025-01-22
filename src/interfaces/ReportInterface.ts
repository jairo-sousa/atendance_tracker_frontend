import { AxiosResponse } from "axios";

export interface ReportApiInterface {
    getDateNowParameters(): Promise<AxiosResponse | null>;
}
