import { WorkdayApi } from "@/api/WorkdayApi";
import { WorkdayApiInterface } from "@/interfaces/WorkdayInterface";
import { AxiosResponse } from "axios";

export class WorkdayUsecase {
    private workdayApi: WorkdayApiInterface;

    constructor() {
        this.workdayApi = new WorkdayApi();
    }

    async checkIn(cpf: string): Promise<AxiosResponse | null> {
        const result = await this.workdayApi.checkIn(cpf);

        return result || null;
    }
}
