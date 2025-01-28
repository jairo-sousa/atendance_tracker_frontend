import { WorkdayApi } from "@/api/WorkdayApi";
import { WorkdayApiInterface } from "@/interfaces/WorkdayInterface";
import { AxiosResponse } from "axios";

export class WorkdayUsecase {
    private workdayApi: WorkdayApiInterface;

    constructor() {
        this.workdayApi = new WorkdayApi();
    }

    async findByDateAndEmployeeId(
        cpf: string,
        date: string
    ): Promise<AxiosResponse | null> {
        const result = await this.workdayApi.findByDateAndEmployeeId(cpf, date);

        return result || null;
    }

    async checkpoint(cpf: string): Promise<AxiosResponse | null> {
        const result = await this.workdayApi.checkpoint(cpf);

        return result || null;
    }
}
