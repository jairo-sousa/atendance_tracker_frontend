import { AxiosResponse } from "axios";

export interface DayApiInterface {
    findByDateAndEmployeeId(
        employeeId: string,
        date: string
    ): Promise<AxiosResponse | null>;
    checkpoint(cpf: string): Promise<AxiosResponse | null>;
}
