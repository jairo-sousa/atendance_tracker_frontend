import { PrimaryRow } from "./structure/PrimaryRow";
import { QuaternaryHeaderCell } from "./structure/QuaternaryHeaderCell";
import { DayReportData } from "./SummaryTableBody";

export interface ReportTableHeaderInterface {
    dayReportData: DayReportData[];
}
export function reportTableHeader({
    dayReportData,
}: ReportTableHeaderInterface) {
    return (
        <PrimaryRow transparent>
            <QuaternaryHeaderCell>Nome</QuaternaryHeaderCell>

            <QuaternaryHeaderCell>Último registro</QuaternaryHeaderCell>

            <QuaternaryHeaderCell>Próximo registro</QuaternaryHeaderCell>
        </PrimaryRow>
    );
}
