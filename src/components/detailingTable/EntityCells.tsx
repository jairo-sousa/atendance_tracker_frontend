import { InputCell } from "@/fragments/table/InputCell";
import { useEffect, useState } from "react";
import { EntityData, EntityField } from "@/interfaces/EntityInterface";
import { extractTime, systemDateToUser } from "@/modules/date/dateOperations";

interface EntityCellsInterface {
    data: EntityData;
    entityfields: EntityField[];
    onCellChange: Function;
    isCreating?: boolean;
}
export const getNestedValue = (obj: any, path: string): any => {
    return path
        .split(".")
        .reduce((acc, key) => (acc ? acc[key] : undefined), obj);
};

const formatCellValue = (value: string, type: string) => {
    if (type === "date") return systemDateToUser(value);
    if (type === "datetime") return extractTime(value);

    return value;
};

export function EntityCells({
    entityfields,
    data,
    onCellChange,
    isCreating,
}: EntityCellsInterface) {
    const [celslData, setCelslData] = useState(data);

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
            {entityfields.map((field, index) => {
                const dataValue = getNestedValue(celslData, field.field) || "";
                const value = field.type
                    ? formatCellValue(dataValue, field.type)
                    : dataValue;

                return (
                    <InputCell
                        key={field.field}
                        entityField={field}
                        onChange={handleChange}
                        enabled={celslData.editing}
                        inputvalue={value}
                        autofocus={celslData.editing && index === 0}
                    />
                );
            })}
        </>
    );
}
