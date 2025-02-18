import { EmplloyeeField } from "@/routes/Employee";
import { EntityData } from "@/hooks/useCrud";
import { InputCell } from "@/fragments/table/InputCell";
import { useEffect, useState } from "react";

interface EmplloyeeCellsInterface {
    data: EntityData;
    employeefields: EmplloyeeField[];
    onCellChange: Function;
}

export function EmplloyeeCells({
    employeefields,
    data,
    onCellChange,
}: EmplloyeeCellsInterface) {
    const [celslData, setCelslData] = useState(data);

    const handleChange = (field: string, value: string) => {
        setCelslData((prevData) => ({
            ...prevData,
            [field]: value,
        }));
        onCellChange({
            ...data,
            [field]: value,
        });
    };

    useEffect(() => {
        setCelslData(data);
    }, [data]);

    if (!data || !celslData) return;

    return (
        <>
            {employeefields.map((field) => (
                <InputCell
                    key={field.field}
                    entityField={field}
                    onChange={handleChange}
                    enabled={celslData.editing}
                    inputvalue={celslData[field.field] || ""}
                />
            ))}
        </>
    );
}
