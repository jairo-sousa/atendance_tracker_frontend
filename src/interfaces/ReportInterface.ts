import { AxiosResponse } from "axios";

export interface ReportApiInterface {
    getDateNowParameters(): Promise<AxiosResponse | null>;
    getTodaySummary(): Promise<AxiosResponse>;
    getTodayReport(): Promise<AxiosResponse>;
}
