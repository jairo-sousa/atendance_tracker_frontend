import { BaseCell } from "@/fragments/table/BaseCell";
import { EmployeeRenderKey } from "@/routes/Employee";
import { EntityData } from "@/hooks/useCrud";

interface EmplloyeeCellsInterface {
    data: EntityData;
    fields: EmployeeRenderKey[];
}

export function EmplloyeeCells({ fields, data }: EmplloyeeCellsInterface) {
    const customStyle = {
        fontWeight: 400,
    };

    return (
        <>
            {fields.map((field) => (
                <BaseCell customStyle={customStyle} key={field}>
                    {data[field] || ""}
                </BaseCell>
            ))}
        </>
    );
}
