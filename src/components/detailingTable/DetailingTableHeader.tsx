import { PrimaryRow } from "@/fragments/table/PrimaryRow";
import { QuaternaryHeaderCell } from "@/fragments/table/QuaternaryHeaderCell";
import { EntityField } from "@/interfaces/EntityInterface";

interface DetailingTableHeaderInterface {
    fields: EntityField[];
    p?: string;
}

export function DetailingTableHeader({
    fields,
    p,
}: DetailingTableHeaderInterface) {
    return (
        <>
            <PrimaryRow p={p || "1.7rem 1.3rem 1.7rem 2.3rem"} transparent>
                {fields.map(({ field, value }) => (
                    <QuaternaryHeaderCell key={field}>
                        {value}
                    </QuaternaryHeaderCell>
                ))}
                <QuaternaryHeaderCell> </QuaternaryHeaderCell>
            </PrimaryRow>
        </>
    );
}
