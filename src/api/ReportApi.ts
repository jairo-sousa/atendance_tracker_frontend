import { globalEnv } from "@/globalEnv";
import { ReportApiInterface } from "@/interfaces/ReportInterface";

import axios, { AxiosResponse } from "axios";

const { API_URL } = globalEnv;

export class ReportApi implements ReportApiInterface {
    async getDateNowParameters(): Promise<AxiosResponse | null> {
        const ROUTE = "report/date-now-parameters";

        const result = await axios.get(`${API_URL}/${ROUTE}`);

        return result || null;
    }

    async getTodaySummary(): Promise<AxiosResponse> {
        try {
            const ROUTE = "report/today-summary";

            const result = await axios.get(`${API_URL}/${ROUTE}`);

            return result;
        } catch (error) {
            throw new Error(`${error}`);
        }
    }

    async getTodayReport(): Promise<AxiosResponse> {
        try {
            const ROUTE = "report/today-report";

            const result = await axios.get(`${API_URL}/${ROUTE}`);

            return result;
        } catch (error) {
            throw new Error(`${error}`);
        }
    }

    async getPeriodReport(
        employee_id: string,
        periodValue: string,
        startDate: string,
        endDate: string,
        session_token: string
    ): Promise<AxiosResponse> {
        try {
            const ROUTE = "report/period-report";
            const QUERYSTRING = `periodValue=${periodValue}&startDate=${startDate}&endDate=${endDate}`;

            const result = await axios.get(
                `${API_URL}/${ROUTE}/${employee_id}?${QUERYSTRING}`,
                {
                    headers: {
                        Authorization: session_token,
                    },
                }
            );

            return result;
        } catch (error) {
            throw new Error(`${error}`);
        }
    }
}
