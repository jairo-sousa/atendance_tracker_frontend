import { ReportApi } from "@/api/ReportApi";
import { ReportApiInterface } from "@/interfaces/ReportInterface";
import { AxiosResponse } from "axios";

export class ReportUsecase {
    private reportApi: ReportApiInterface;

    constructor() {
        this.reportApi = new ReportApi();
    }

    async getDateNowParameters(): Promise<AxiosResponse | null> {
        const result = await this.reportApi.getDateNowParameters();

        return result;
    }

    async getTodaySummary(): Promise<AxiosResponse> {
        const result = await this.reportApi.getTodaySummary();

        return result;
    }

    async getDayReport(): Promise<AxiosResponse> {
        const result = await this.reportApi.getTodayReport();

        return result;
    }
}
