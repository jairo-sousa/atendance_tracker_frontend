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

    async findByDateAndEmployeeId(
        cpf: string,
        date: string
    ): Promise<AxiosResponse | null> {
        const result = await this.workdayApi.findByDateAndEmployeeId(cpf, date);

        return result || null;
    }

    async checkpoint(
        employee_id: string,
        date: string,
        cpf: string
    ): Promise<AxiosResponse | null> {
        const validWorkday = await this.workdayApi.findByDateAndEmployeeId(
            employee_id,
            date
        );

        if (!validWorkday?.data) {
            console.log("Fazendo Check-in para: ", cpf);

            const result = await this.checkIn(cpf);

            return result || null;
        }

        const checkpointPaths = ["lunch_start", "lunch_end", "check_out"];

        checkpointPaths.map(async (checkpoint) => {
            if (validWorkday.data[checkpoint] === null) {
                console.log("Fazendo ", checkpoint, " para: ", cpf);

                const result = await this.workdayApi.checkpoint(
                    cpf,
                    checkpoint.replace("_", "-")
                );
                return result || null;
            }
        });

        throw new Error("Dia de trabalho finalizado.");
    }
}
