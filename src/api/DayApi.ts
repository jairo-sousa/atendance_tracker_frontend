import { globalEnv } from "@/globalEnv";
import { DayApiInterface } from "@/interfaces/DayInterface";
import axios, { AxiosResponse } from "axios";

const { API_URL } = globalEnv;

export class DayApi implements DayApiInterface {
    async checkpoint(cpf: string): Promise<AxiosResponse | null> {
        try {
            const result = await axios.post(`${API_URL}/day/checkpoint/${cpf}`);
            return result || null;
        } catch (error) {
            throw new Error(`${error}`);
        }
    }

    async findByDateAndEmployeeId(
        employeeId: string,
        date: string
    ): Promise<AxiosResponse | null> {
        const ROUTE = "day/date";
        const SUFIX = `${employeeId}?date=${date}`;

        const result = await axios.get(`${API_URL}/${ROUTE}/${SUFIX}`);
        return result || null;
    }
}
