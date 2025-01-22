import { EmployeeUsecase } from "@/usecases/employeeUsecase";
import { ReportUsecase } from "@/usecases/reportUsecase";
import { WorkdayUsecase } from "@/usecases/workdayUsecase";
import { AxiosResponse } from "axios";

export class WorkdayService {
    private workdayUsecase;
    private employeeUsecase;
    private reportUsecase;

    constructor() {
        this.workdayUsecase = new WorkdayUsecase();
        this.employeeUsecase = new EmployeeUsecase();
        this.reportUsecase = new ReportUsecase();
    }

    async workdayRegister(cpf: string): Promise<AxiosResponse | null> {
        try {
            if (!cpf) throw new Error("Cpf é obrigatório!");

            const validEmployee = await this.employeeUsecase.findByCPF(cpf);

            if (validEmployee) {
                const result = await this.workdayUsecase.checkIn(cpf);

                console.log(result ? result.data : "falha");
                return result || null;
            }
            throw new Error("[ Employee ] - Invalid cpf");
        } catch (err: any) {
            console.log(err);
            return null;
        }
    }

    async checkpoint(
        cpf: string,
        callBack: Function
    ): Promise<AxiosResponse | null> {
        try {
            if (!cpf) throw new Error("Cpf é obrigatório!");

            const validEmployee = await this.employeeUsecase.findByCPF(cpf);

            if (validEmployee) {
                const dateParameters =
                    await this.reportUsecase.getDateNowParameters();

                if (dateParameters) {
                    const result = await this.workdayUsecase.checkpoint(
                        validEmployee.data.id,
                        dateParameters.data.date,
                        cpf
                    );
                    console.log(result ? result.data : "falha");
                    return result || null;
                }
                console.log("Problema ao obter data de hoje");
            }
            throw new Error("[ Employee ] - Invalid cpf");
        } catch (err: any) {
            console.log(err);
            return null;
        } finally {
            callBack();
            return null;
        }
    }
}
