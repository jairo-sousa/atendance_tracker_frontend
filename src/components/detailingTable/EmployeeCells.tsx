import { BaseCell } from "@/fragments/table/BaseCell";
import { EmployeeData } from "./EmployeeRows";
import { EmployeeRenderKey } from "@/routes/Employee";

interface EmplloyeeCellsInterface {
    data: EmployeeData;
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
