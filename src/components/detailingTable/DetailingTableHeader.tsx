import { PrimaryRow } from "@/fragments/table/PrimaryRow";
import { QuaternaryHeaderCell } from "@/fragments/table/QuaternaryHeaderCell";
import { EmplloyeeField } from "@/routes/Employee";

interface DetailingTableHeaderInterface {
    fields: EmplloyeeField[];
}

export function DetailingTableHeader({
    fields,
}: DetailingTableHeaderInterface) {
    return (
        <>
            <PrimaryRow p="1.7rem 1.3rem 1.7rem 2.3rem" transparent>
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
