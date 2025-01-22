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

    async checkpoint(
        cpf: string,
        checkpointPath: string
    ): Promise<AxiosResponse | null> {
        const body = { employee_cpf: cpf };

        try {
            const result = await axios.patch(
                `${API_URL}/workday/${checkpointPath}`,
                body
            );
            console.log(body);
            return result || null;
        } catch (error) {
            console.log(error);
            return null;
        }
    }

    async findByDateAndEmployeeId(
        employee_id: string,
        date: string
    ): Promise<AxiosResponse | null> {
        const ROUTE = "workday/date";
        const SUFIX = `${employee_id}?date=${date}`;

        const result = await axios.get(`${API_URL}/${ROUTE}/${SUFIX}`);
        return result || null;
    }
}
