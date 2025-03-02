import { InputCell } from "@/fragments/table/InputCell";
import { useEffect, useState } from "react";
import { EntityData, EntityField } from "@/interfaces/EntityInterface";

interface EntityCellsInterface {
    data: EntityData;
    entityfields: EntityField[];
    onCellChange: Function;
    isCreating?: boolean;
}

export function EntityCells({
    entityfields,
    data,
    onCellChange,
    isCreating,
}: EntityCellsInterface) {
    const [celslData, setCelslData] = useState(data);

    const getNestedValue = (obj: any, path: string): any => {
        return path
            .split(".")
            .reduce((acc, key) => (acc ? acc[key] : undefined), obj);
    };

    const handleChange = (field: string, value: string) => {
        setCelslData((prevData) => ({
            ...prevData,
            [field]: value,
        }));
        if (isCreating) {
            onCellChange({
                [field]: value,
            });
        } else {
            onCellChange({
                ...data,
                [field]: value,
            });
        }
    };

    useEffect(() => {
        setCelslData(data);
    }, [data]);

    if (!data || !celslData) return;

    return (
        <>
            {entityfields.map((field, index) => (
                <InputCell
                    key={field.field}
                    entityField={field}
                    onChange={handleChange}
                    enabled={celslData.editing}
                    inputvalue={getNestedValue(celslData, field.field) || ""}
                    autofocus={celslData.editing && index === 0}
                />
            ))}
        </>
    );
}
