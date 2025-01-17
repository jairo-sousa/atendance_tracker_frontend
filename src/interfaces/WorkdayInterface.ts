import { AxiosResponse } from "axios";

export interface WorkdayApiInterface {
    findByDateAndEmployeeId(
        employee_id: string,
        date: string
    ): Promise<AxiosResponse | null>;
    checkpoint(cpf: string): Promise<AxiosResponse | null>;
}
