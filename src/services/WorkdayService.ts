import { EmployeeUsecase } from "@/usecases/employeeUsecase";
import { WorkdayUsecase } from "@/usecases/workdayUsecase";
import { AxiosResponse } from "axios";

export class WorkdayService {
    private workdayUsecase;
    private employeeUsecase;

    constructor() {
        this.workdayUsecase = new WorkdayUsecase();
        this.employeeUsecase = new EmployeeUsecase();
    }

    async workdayRegister(
        cpf: string,
        callBack: Function
    ): Promise<AxiosResponse | null> {
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
        } finally {
            callBack();
            return null;
        }
    }
}
