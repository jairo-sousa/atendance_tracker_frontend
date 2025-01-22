import { AxiosResponse } from "axios";

export interface WorkdayApiInterface {
    checkIn(cpf: string): Promise<AxiosResponse | null>;
    findByDateAndEmployeeId(
        employee_id: string,
        date: string
    ): Promise<AxiosResponse | null>;
    checkpoint(
        cpf: string,
        checkpointPath: string
    ): Promise<AxiosResponse | null>;
}
