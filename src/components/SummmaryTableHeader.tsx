import { PrimaryRow } from "./structure/PrimaryRow";
import { QuaternaryHeaderCell } from "./structure/QuaternaryHeaderCell";

export function SummmaryTableHeader() {
    const customStyle = {
        minWidth: "21rem",
    };

    return (
        <>
            <PrimaryRow transparent>
                <QuaternaryHeaderCell>Nome</QuaternaryHeaderCell>

                <QuaternaryHeaderCell customStyle={customStyle}>
                    Último registro
                </QuaternaryHeaderCell>

                <QuaternaryHeaderCell>Próximo registro</QuaternaryHeaderCell>
            </PrimaryRow>
        </>
    );
}
