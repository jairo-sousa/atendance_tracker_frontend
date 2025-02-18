import { forwardRef, useImperativeHandle } from "react";
import { PrimaryRow } from "@/fragments/table/PrimaryRow";
import {
    EmplloyeeField,
    emplloyeeFields,
    EmployeeRenderKey,
} from "@/routes/Employee";
import { EmplloyeeCells } from "./EmployeeCells";
import { ActionButton } from "./ActionButton";
import { EntityData, useCrud } from "@/hooks/useCrud";
import { ActionsCell } from "./ActionsCell";

export interface EmployeeData extends EntityData {
    id: string;
    name: string;
    cpf: string;
    editing: boolean;
    phone?: string;
}

interface EmployeeRowsInterface {
    employeefields: EmplloyeeField[];
    searchQuery?: string;
}

export const EmployeeRows = forwardRef(
    ({ employeefields, searchQuery }: EmployeeRowsInterface, ref) => {
        const fieldValues: EmployeeRenderKey[] = emplloyeeFields.map(
            (fieldObj) => fieldObj.field as EmployeeRenderKey
        );

        const { actions, addingData, data, handleAdd, handleCellChange } =
            useCrud({
                fields: fieldValues,
                url: "/employee",
            });

        useImperativeHandle(ref, () => ({
            handleAdd,
        }));

        if (!data) return null;

        const filteredData = searchQuery
            ? data.filter((data) =>
                  data.name.toLowerCase().includes(searchQuery.toLowerCase())
              )
            : data;

        const {
            editButton,
            deleteButton,
            cancelEditButton,
            updateButton,
            createButton,
            cancelCreateButton,
        } = actions;

        const rowPadding = "1.7rem 1.3rem 1.7rem 2.3rem";

        return (
            <>
                {filteredData.map((data, index) => (
                    <PrimaryRow
                        p={rowPadding}
                        key={data.cpf}
                        transparent={index % 2 !== 0}
                    >
                        <EmplloyeeCells
                            employeefields={employeefields}
                            data={data}
                            onCellChange={handleCellChange}
                        />

                        <ActionsCell>
                            {!data.editing && (
                                <>
                                    <ActionButton
                                        id={data.id}
                                        imagePath={editButton.imagePath}
                                        onClick={editButton.onClick}
                                    />
                                    <ActionButton
                                        id={data.id}
                                        imagePath={deleteButton.imagePath}
                                        onClick={deleteButton.onClick}
                                    />
                                </>
                            )}

                            {data.editing && (
                                <>
                                    <ActionButton
                                        id={data.id}
                                        imagePath={cancelEditButton.imagePath}
                                        onClick={cancelEditButton.onClick}
                                    />
                                    <ActionButton
                                        id={data.id}
                                        imagePath={updateButton.imagePath}
                                        onClick={updateButton.onClick}
                                    />
                                </>
                            )}
                        </ActionsCell>
                    </PrimaryRow>
                ))}

                {addingData && (
                    <PrimaryRow
                        transparent={filteredData.length % 2 != 0}
                        p={rowPadding}
                    >
                        <EmplloyeeCells
                            employeefields={employeefields}
                            data={addingData}
                            onCellChange={handleCellChange}
                        />

                        <ActionsCell>
                            {addingData.editing && (
                                <>
                                    <ActionButton
                                        id={addingData.id}
                                        imagePath={cancelCreateButton.imagePath}
                                        onClick={cancelCreateButton.onClick}
                                    />
                                    <ActionButton
                                        id={addingData.id}
                                        imagePath={createButton.imagePath}
                                        onClick={createButton.onClick}
                                    />
                                </>
                            )}
                        </ActionsCell>
                    </PrimaryRow>
                )}
            </>
        );
    }
);
