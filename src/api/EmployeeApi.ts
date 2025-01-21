import { globalEnv } from "@/globalEnv";
import { EmployeeApiInterface } from "@/interfaces/EmployeeInterface";

import axios, { AxiosResponse } from "axios";

const { API_URL } = globalEnv;

export class EmployeeApi implements EmployeeApiInterface {
    async findByCpf(cpf: string): Promise<AxiosResponse | null> {
        const response = await axios.get(`${API_URL}/employee/${cpf}`);
        return response || null;
    }
}
