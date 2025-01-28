import { globalEnv } from "@/globalEnv";
import { WorkdayApiInterface } from "@/interfaces/WorkdayInterface";
import axios, { AxiosResponse } from "axios";

const { API_URL } = globalEnv;

export class WorkdayApi implements WorkdayApiInterface {
    async checkpoint(cpf: string): Promise<AxiosResponse | null> {
        try {
            const result = await axios.post(
                `${API_URL}/workday/checkpoint/${cpf}`
            );
            return result || null;
        } catch (error) {
            throw new Error(`${error}`);
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
