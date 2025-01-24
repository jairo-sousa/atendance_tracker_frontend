import { Span } from "@chakra-ui/react";
import { BaseCell } from "./structure/BaseCell";
import { PrimaryRow } from "./structure/PrimaryRow";
import { globalColors } from "@/theme/theme";

export interface DaySummaryData {
    name: string;
    lastRecord: string;
    status: string;
    nextRecord: string;
    presence: boolean;
    minutesLate: number;
}

interface SummaryTableBodyinterface {
    daySummaryData: DaySummaryData[];
}

export function SummaryTableBody({
    daySummaryData,
}: SummaryTableBodyinterface) {
    const customStyleLastRecord = { minWidth: "19.3rem" };

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
                    <BaseCell>{data.name}</BaseCell>

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
