import { PrimaryRow } from "./structure/PrimaryRow";
import { QuaternaryHeaderCell } from "./structure/QuaternaryHeaderCell";

export function SummmaryTableHeader() {
    const customStyleLastRecord = {
        minWidth: "21rem",
    };

    const customStyleNextRecord = {
        minWidth: "18rem",
    };

    return (
        <>
            <PrimaryRow transparent>
                <QuaternaryHeaderCell>Nome</QuaternaryHeaderCell>

                <QuaternaryHeaderCell customStyle={customStyleLastRecord}>
                    Último registro
                </QuaternaryHeaderCell>

                <QuaternaryHeaderCell customStyle={customStyleNextRecord}>
                    Próximo registro
                </QuaternaryHeaderCell>
            </PrimaryRow>
        </>
    );
}
