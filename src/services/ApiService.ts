import { DaySummaryData } from "@/components/SummaryTableBody";
import { ReportUsecase } from "@/usecases/reportUsecase";
import { WorkdayUsecase } from "@/usecases/workdayUsecase";
import { AxiosResponse } from "axios";

export class ApiService {
    private workdayUsecase;
    private reportUsecase;

    constructor() {
        this.workdayUsecase = new WorkdayUsecase();
        this.reportUsecase = new ReportUsecase();
    }

    async checkpoint(
        cpf: string,
        callBack: Function
    ): Promise<AxiosResponse | null> {
        try {
            if (!cpf) throw new Error("Cpf é obrigatório!");

            const result = await this.workdayUsecase.checkpoint(cpf);

            console.log(result ? result.data : "falha");

            return result || null;
        } catch (err: any) {
            console.log(err);
            return null;
        } finally {
            callBack();
            return null;
        }
    }

    async getTodaySummary(): Promise<DaySummaryData[]> {
        try {
            const result = await this.reportUsecase.getTodaySummary();

            return result.data;
        } catch (err: any) {
            throw new Error(err);
        }
    }
}
