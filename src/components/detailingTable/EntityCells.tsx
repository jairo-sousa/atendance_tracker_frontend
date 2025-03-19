import { InputCell } from "@/fragments/table/InputCell";
import { useEffect, useState } from "react";
import { EntityData, EntityField } from "@/interfaces/EntityInterface";
import { extractTime } from "@/modules/date/dateOperations";

interface EntityCellsInterface {
    data: EntityData;
    entityfields: EntityField[];
    onCellChange: Function;
}

export const getNestedValue = (obj: any, path: string): any => {
    return path
        .split(".")
        .reduce((acc, key) => (acc ? acc[key] : undefined), obj);
};

const formatCellValue = (value: string, type: string) => {
    if (type === "datetime") return extractTime(value);

    return value;
};

const isDateTime = (value: any) => {
    return (
        typeof value === "string" &&
        value.match(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/)
    );
};

export function EntityCells({
    entityfields,
    data,
    onCellChange,
}: EntityCellsInterface) {
    const [celslData, setCelslData] = useState(data);

    const handleChange = (field: string, value: string) => {
        const currentValue = celslData[field];
        let newValue = value;

        if (isDateTime(currentValue)) {
            const [date, time] = currentValue.split("T");
            const [, , seconds] = time.split(":");
            newValue = `${date}T${value}:${seconds}`;
        }

        setCelslData((prevData) => ({
            ...prevData,
            [field]: newValue,
        }));

        onCellChange({
            [field]: newValue,
        });
    };

    useEffect(() => {
        setCelslData(data);
    }, [data]);

    if (!data || !celslData) return;

    return (
        <>
            {entityfields.map((field, index) => {
                const dataValue = getNestedValue(celslData, field.field) || "";
                let value = "";
                if (dataValue) {
                    value = field.type
                        ? formatCellValue(dataValue, field.type)
                        : dataValue;
                }

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
