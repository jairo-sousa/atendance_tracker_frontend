import { globalEnv } from "@/globalEnv";
import { WorkdayApiInterface } from "@/interfaces/WorkdayInterface";
import axios, { AxiosResponse } from "axios";

const { API_URL } = globalEnv;

export class WorkdayApi implements WorkdayApiInterface {
    async checkIn(cpf: string): Promise<AxiosResponse | null> {
        const body = { employee_cpf: cpf };

        const result = await axios.post(`${API_URL}/workday/check-in`, body);

        return result || null;
    }
}
