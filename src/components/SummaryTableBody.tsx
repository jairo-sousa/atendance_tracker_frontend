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
export interface DayReportData {
    name?: string;
    cpf?: string;
    date: string;
    status: string;
    lateMinutes: number;
    overtimeMinutes: number;
    timeWorked: string;
    dayValue: string;
    overtimePrice: number;
}

interface SummaryTableBodyinterface {
    daySummaryData: DaySummaryData[];
}

export function SummaryTableBody({
    daySummaryData,
}: SummaryTableBodyinterface) {
    const customStyleLastRecord = { minWidth: "21rem" };
    const customStyleNextRecord = { minWidth: "18rem" };

    const { contentSuccess, contentError } = globalColors;
    const colorSuccess = contentSuccess;
    const colorError = contentError;

    return (
        <>
            {daySummaryData.map((data, index) => (
                <PrimaryRow
                    key={`${data.name ? data.name : data.cpf} - ${index}`}
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

                    <BaseCell customStyle={customStyleNextRecord}>
                        {data.nextRecord}
                    </BaseCell>
                </PrimaryRow>
            ))}
        </>
    );
}
