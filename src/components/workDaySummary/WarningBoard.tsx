import { Span } from "@chakra-ui/react";
import { PrimaryRow } from "../../fragments/table/PrimaryRow";
import { DaySummaryData } from "@/components/workDaySummary/SummaryTableBody";
import { SecondaryText } from "../../fragments/text/SecondaryText";
import { globalColors } from "@/theme/theme";

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
        ({ presence, absentByLate, minutesLate }) =>
            !presence && absentByLate && minutesLate > 30
    );
    const absentByLessWorkData = daySummaryData.filter(
        ({ presence, absentByLate, minutesLate }) =>
            !presence && absentByLate && minutesLate < 30
    );
    const absentSummaryData = daySummaryData.filter(
        ({ presence, absentByLate }) => !presence && !absentByLate
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
