import { Span } from "@chakra-ui/react";
import { PrimaryRow } from "./structure/PrimaryRow";
import { DaySummaryData } from "./SummaryTableBody";
import { SecondaryText } from "./structure/SecondaryText";
import { globalColors } from "@/theme/theme";

interface WarningBoardInterface {
    daySummaryData: DaySummaryData[];
}

export function WarningBoard({ daySummaryData }: WarningBoardInterface) {
    const absentByLateData = daySummaryData.filter((data) => data.absentByLate);
    const absentSummaryData = daySummaryData.filter(
        ({ presence, absentByLate }) => !presence && !absentByLate
    );

    if (!absentSummaryData.length && !absentByLateData.length) return null;

    const { contentError } = globalColors;

    const warningMessage = (minutes: number) => {
        return `: Atrasou ${minutes} minutos! Você não será pago pelo dia de hoje e
        receberá uma multa. Chegue mais cedo na próxima.`;
    };

    return (
        <>
            {absentByLateData.map(({ name, cpf, minutesLate }, index) => (
                <PrimaryRow key={`${name ? name : cpf} - ${index}`}>
                    <SecondaryText>
                        <Span color={contentError}>{name ? name : cpf}</Span>

                        {`${warningMessage(minutesLate)}`}
                    </SecondaryText>
                </PrimaryRow>
            ))}
            {absentSummaryData.map(({ name, cpf }, index) => (
                <PrimaryRow key={`${name ? name : cpf} - ${index}`}>
                    <SecondaryText>
                        <Span color={contentError}>{name ? name : cpf}</Span>
                        {": Levou falta por ausência"}
                    </SecondaryText>
                </PrimaryRow>
            ))}
        </>
    );
}
