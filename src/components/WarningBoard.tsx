import { Span } from "@chakra-ui/react";
import { PrimaryRow } from "./structure/PrimaryRow";
import { DaySummaryData } from "./SummaryTableBody";
import { SecondaryText } from "./structure/SecondaryText";
import { globalColors } from "@/theme/theme";

interface WarningBoardInterface {
    daySummaryData: DaySummaryData[];
}

export function WarningBoard({ daySummaryData }: WarningBoardInterface) {
    const absentSummaryData = daySummaryData.filter((data) => !data.Presence);

    if (!absentSummaryData.length) return null;

    const { contentError } = globalColors;

    const warningMessage = (minutes: number) =>
        `: Atrasou ${minutes} minutos! Você não será pago pelo dia de hoje e
        receberá uma multa. Chegue mais cedo na próxima.`;

    return (
        <>
            {absentSummaryData.map(({ name, minutesLate }, index) => (
                <PrimaryRow key={`${name} - ${index}`}>
                    <SecondaryText>
                        <Span color={contentError}>{name}</Span>

                        {`${warningMessage(minutesLate)}`}
                    </SecondaryText>
                </PrimaryRow>
            ))}
        </>
    );
}
