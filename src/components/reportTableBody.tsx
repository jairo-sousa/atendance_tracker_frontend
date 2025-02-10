import { PrimaryRow } from "./structure/PrimaryRow";
import { QuaternaryHeaderCell } from "./structure/QuaternaryHeaderCell";

export function reportTableHeader() {
    return (
        <PrimaryRow transparent>
            <QuaternaryHeaderCell>Nome</QuaternaryHeaderCell>

            <QuaternaryHeaderCell>Último registro</QuaternaryHeaderCell>

            <QuaternaryHeaderCell>Próximo registro</QuaternaryHeaderCell>
        </PrimaryRow>
    );
}
