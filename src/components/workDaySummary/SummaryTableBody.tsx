import { Span } from "@chakra-ui/react";
import { globalColors } from "@/theme/theme";
import { PrimaryRow } from "@/fragments/table/PrimaryRow";
import { BaseCell } from "@/fragments/table/BaseCell";

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
    const customStyleName = { minWidth: "10.5rem" };
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
                    <BaseCell customStyle={customStyleName}>
                        {data.name ? data.name.split(" ")[0] : data.cpf}
                    </BaseCell>

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
