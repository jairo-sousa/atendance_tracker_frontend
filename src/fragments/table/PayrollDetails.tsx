import { PeriodReportData } from "@/interfaces/ReportInterface";
import { Flex } from "@chakra-ui/react";
import { PayrollDetail } from "./PayrollDetail";

interface PayrollDetailsInterface {
    data: PeriodReportData;
}

export function PayrollDetails({ data }: PayrollDetailsInterface) {
    const {
        absenceFine,
        daysAbsent,
        daysWorked,
        daysShoudWork,
        overtimeMinutes,
        periodValueToPay,
        overtimeToPay,
    } = data;

    return (
        <Flex direction={"column"} w={"100%"} alignItems={"flex-end"}>
            <PayrollDetail
                type="amount"
                label="Dias Úteis"
                value={daysShoudWork}
            />
            <PayrollDetail
                type="amount"
                label="Dias trabalhados"
                value={daysWorked}
            />
            <PayrollDetail type="amount" label="Faltas" value={daysAbsent} />

            <PayrollDetail
                type="amount"
                label="Total horas extras(minutos)"
                value={overtimeMinutes}
            />

            <PayrollDetail
                type="currency"
                label="Valor total horas extras"
                value={overtimeToPay}
            />
            <PayrollDetail
                type="currency"
                label="Multa de faltas"
                value={absenceFine}
            />

            <PayrollDetail
                type="currency"
                label="Total a pagar"
                value={periodValueToPay}
                fontSize="2.5rem"
            />
        </Flex>
    );
}
