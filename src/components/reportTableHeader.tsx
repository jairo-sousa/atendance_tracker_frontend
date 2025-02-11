import { PrimaryRow } from "../fragments/table/PrimaryRow";
import { QuaternaryHeaderCell } from "../fragments/table/QuaternaryHeaderCell";

export function ReportTableHeader() {
    const overtmeStyle = {
        minWidth: "14rem",
    };
    return (
        <>
            <PrimaryRow transparent>
                <QuaternaryHeaderCell>Nome</QuaternaryHeaderCell>

                <QuaternaryHeaderCell>Minutos de atraso</QuaternaryHeaderCell>

                <QuaternaryHeaderCell customStyle={overtmeStyle}>
                    Minutos hora extra
                </QuaternaryHeaderCell>

                <QuaternaryHeaderCell>Tempo trabalhado</QuaternaryHeaderCell>
            </PrimaryRow>
        </>
    );
}
