import { Span } from "@chakra-ui/react";
import { BaseCell } from "./structure/BaseCell";
import { PrimaryRow } from "./structure/PrimaryRow";
import { globalColors } from "@/theme/theme";

export interface DaySummaryData {
    name?: string;
    cpf?: string;
    lastRecord: string;
    status: string;
    nextRecord: string;
    presence: boolean;
    minutesLate: number;
    absentByLate?: boolean;
}

interface SummaryTableBodyinterface {
    daySummaryData: DaySummaryData[];
}

export function SummaryTableBody({
    daySummaryData,
}: SummaryTableBodyinterface) {
    const customStyleLastRecord = { minWidth: "21rem" };

    const { contentSuccess, contentError } = globalColors;
    const colorSuccess = contentSuccess;
    const colorError = contentError;

    return (
        <>
            {daySummaryData.map((data, index) => (
                <PrimaryRow
                    key={`${data.name} - ${index}`}
                    transparent={index % 2 != 0}
                >
                    <BaseCell>{data.name ? data.name : data.cpf}</BaseCell>

                    <BaseCell customStyle={customStyleLastRecord}>
                        <Span color={data.presence ? colorSuccess : colorError}>
                            {data.lastRecord}
                        </Span>

                        <Span color={!data.presence ? colorError : ""}>
                            {` - ${data.status}`}
                        </Span>
                    </BaseCell>

                    <BaseCell>{data.nextRecord}</BaseCell>
                </PrimaryRow>
            ))}
        </>
    );
}
