import { AxiosResponse } from "axios";

export interface EmployeeApiInterface {
    findByCpf(cpf: string): Promise<AxiosResponse | null>;
}
