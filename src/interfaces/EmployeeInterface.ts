import { AxiosResponse } from "axios";

interface EmployeeRenderKeys {
    name: string;
    cpf: string;
    phone: string;
}

export type EmployeeRenderKey = keyof EmployeeRenderKeys;

export interface EmployeeApiInterface {
    findByCpf(cpf: string): Promise<AxiosResponse | null>;
}
