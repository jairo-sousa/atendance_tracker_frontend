import { PrimaryRow } from "@/fragments/table/PrimaryRow";
import { QuaternaryHeaderCell } from "@/fragments/table/QuaternaryHeaderCell";
import { EntityField } from "@/interfaces/EntityInterface";

interface DetailingTableHeaderInterface {
    fields: EntityField[];
    p?: string;
    noAction?: boolean;
}

export function DetailingTableHeader({
    fields,
    p,
    noAction,
}: DetailingTableHeaderInterface) {
    return (
        <>
            <PrimaryRow p={p || "1.7rem 1.3rem 1.7rem 2.3rem"} transparent>
                {fields.map(({ field, value }) => (
                    <QuaternaryHeaderCell key={field}>
                        {value}
                    </QuaternaryHeaderCell>
                ))}
                {!noAction && <QuaternaryHeaderCell> </QuaternaryHeaderCell>}
            </PrimaryRow>
        </>
    );
}
