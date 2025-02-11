import { PrimaryRow } from "../../fragments/table/PrimaryRow";
import { QuaternaryHeaderCell } from "../../fragments/table/QuaternaryHeaderCell";

export function reportTableHeader() {
    return (
        <PrimaryRow transparent>
            <QuaternaryHeaderCell>Nome</QuaternaryHeaderCell>

            <QuaternaryHeaderCell>Último registro</QuaternaryHeaderCell>

            <QuaternaryHeaderCell>Próximo registro</QuaternaryHeaderCell>
        </PrimaryRow>
    );
}
