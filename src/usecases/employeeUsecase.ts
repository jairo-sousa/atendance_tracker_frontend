import { EmployeeApi } from "@/api/EmployeeApi";
import { EmployeeApiInterface } from "@/interfaces/EmployeeInterface";
import { AxiosResponse } from "axios";

export class EmployeeUsecase {
    private employeeApi: EmployeeApiInterface;

    constructor() {
        this.employeeApi = new EmployeeApi();
    }

    async findByCPF(cpf: string): Promise<AxiosResponse | null> {
        const result = await this.employeeApi.findByCpf(cpf);

        return result;
    }
}
