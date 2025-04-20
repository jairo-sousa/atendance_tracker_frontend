import { Span } from "@chakra-ui/react";
import { PrimaryRow } from "../../fragments/table/PrimaryRow";
import { SecondaryText } from "../../fragments/text/SecondaryText";
import { globalColors } from "@/theme/theme";
import { DaySummaryData } from "@/interfaces/ReportInterface";

interface WarningBoardInterface {
    daySummaryData: DaySummaryData[];
}

const lateMessage = (minutes: number) => {
    return `: Atrasou ${minutes} minutos! Você não será pago pelo dia de hoje e
    receberá uma multa. Chegue mais cedo na próxima.`;
};

const lessWorkMessage = () => {
    return `: Horas trabalhadas inferiores ao esperado. Você não será pago pelo dia de hoje e
    receberá uma multa.`;
};
const absenceMessage = () => {
    return ": Levou falta por ausência";
};

export function WarningBoard({ daySummaryData }: WarningBoardInterface) {
    const absentByLateData = daySummaryData.filter(
        ({ presence, absentByLate }) => !presence && absentByLate
    );
    const absentByLessWorkData = daySummaryData.filter(
        ({ presence, absentByLessWork }) => !presence && absentByLessWork
    );
    const absentSummaryData = daySummaryData.filter(
        ({ presence, absentByLate, absentByLessWork }) =>
            !presence && !absentByLate && !absentByLessWork
    );

    if (
        !absentSummaryData.length &&
        !absentByLessWorkData.length &&
        !absentByLateData.length
    )
        return null;

    const { contentError } = globalColors;

    return (
        <>
            {absentByLateData.map(({ name, cpf, minutesLate }, index) => (
                <PrimaryRow key={`${name ? name : cpf} - ${index}`}>
                    <SecondaryText>
                        <Span color={contentError}>
                            {name ? name.split(" ")[0] : cpf}
                        </Span>

                        {lateMessage(minutesLate)}
                    </SecondaryText>
                </PrimaryRow>
            ))}

            {absentByLessWorkData.map(({ name, cpf }, index) => (
                <PrimaryRow key={`${name ? name : cpf} - ${index}`}>
                    <SecondaryText>
                        <Span color={contentError}>
                            {name ? name.split(" ")[0] : cpf}
                        </Span>

                        {lessWorkMessage()}
                    </SecondaryText>
                </PrimaryRow>
            ))}
            {absentSummaryData.map(({ name, cpf }, index) => (
                <PrimaryRow key={`${name ? name : cpf} - ${index}`}>
                    <SecondaryText>
                        <Span color={contentError}>
                            {name ? name.split(" ")[0] : cpf}
                        </Span>
                        {absenceMessage()}
                    </SecondaryText>
                </PrimaryRow>
            ))}
        </>
    );
}
