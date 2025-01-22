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
}
