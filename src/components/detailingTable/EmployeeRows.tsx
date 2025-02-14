import { useEffect, useState, forwardRef, useImperativeHandle } from "react";
import { PrimaryRow } from "@/fragments/table/PrimaryRow";
import { EmployeeRenderKey } from "@/routes/Employee";
import { EmplloyeeCells } from "./EmployeeCells";
import { Flex } from "@chakra-ui/react";
import { ActionButton } from "./ActionButton";

export interface EmployeeData {
    id: string;
    name: string;
    cpf: string;
    editing: boolean;
    phone?: string;
}

const sampleEmployeeData: EmployeeData[] = [
    {
        id: "sajjdfn-saflks",
        cpf: "123456789",
        name: "João",
        phone: "5599999999",
        editing: false,
    },
    {
        id: "ew.mn-.mnsdiu",
        cpf: "987654321",
        name: "Maria",
        editing: false,
    },
];

interface EmployeeRowsInterface {
    fields: EmployeeRenderKey[];
    searchQuery?: string;
}

export const EmployeeRows = forwardRef(
    ({ fields, searchQuery }: EmployeeRowsInterface, ref) => {
        const [employeeData, setEmployeeData] = useState<EmployeeData[]>([]);
        const [addingData, setAddingData] = useState<EmployeeData | null>(null);

        const handleAdd = () => {
            console.log("Criando novo ");
            if (addingData == null) {
                const voidEmployee = {
                    id: "",
                    name: "",
                    cpf: "",
                    editing: true,
                    phone: "",
                };
                setAddingData(voidEmployee);
                const updatedData = employeeData?.map((data) => {
                    if (data.editing) {
                        return { ...data, editing: false };
                    }
                    return data;
                });
                setEmployeeData(updatedData);
            }
        };

        const handleEdit = (id: string) => {
            console.log("Editando: ", id);

            const updatedData = employeeData?.map((data) => {
                if (data.id === id) {
                    return { ...data, editing: true };
                } else {
                    return { ...data, editing: false };
                }
            });
            setEmployeeData(updatedData);
            setAddingData(null);
        };

        const handleCancelEdit = (id: string) => {
            console.log("Cancelando edição de: ", id);
            const updatedData = employeeData?.map((data) => {
                if (data.id === id) {
                    return { ...data, editing: false };
                }
                return data;
            });
            setEmployeeData(updatedData);
        };

        const handleCancelCreate = () => {
            console.log("Cancelando criação", addingData?.cpf);
            setAddingData(null);
        };

        // CRUD
        const handleCreate = () => {
            // POST AT API + TOAST HANDLING
            console.log("Criando com cpf: ", addingData?.cpf);
            setAddingData(null);
        };

        const handleGet = () => {
            // TODO REPLACE WITH GET AT API
            console.log("Buscando Dados");
            setEmployeeData(sampleEmployeeData);
        };

        const handleUpdate = (id: string) => {
            // TODO GET DATA + PUT AT API + TOAST HANDLING
            const updatedData = employeeData?.map((data) => {
                if (data.id === id) {
                    console.log("Atualizando: ", data.name);
                    return { ...data, editing: false };
                }
                return data;
            });
            setEmployeeData(updatedData);
        };

        const handleDelete = (id: string) => {
            // TODO GET DATA + DELETE AT API + TOAST HANDLING
            console.log("Removendo id: ", id);
        };

        useImperativeHandle(ref, () => ({
            handleAdd,
        }));

        useEffect(handleGet, []);

        if (!employeeData) return null;

        const filteredData = searchQuery
            ? employeeData.filter((data) =>
                  data.name.toLowerCase().includes(searchQuery.toLowerCase())
              )
            : employeeData;

        const actions = {
            editButton: { imagePath: "pen", onClick: handleEdit },
            deleteButton: { imagePath: "trash", onClick: handleDelete },
            cancelEditButton: { imagePath: "cross", onClick: handleCancelEdit },
            updateButton: { imagePath: "save", onClick: handleUpdate },
            createButton: { imagePath: "save", onClick: handleCreate },
            cancelCreateButton: {
                imagePath: "cross",
                onClick: handleCancelCreate,
            },
        };

        const {
            editButton,
            deleteButton,
            cancelEditButton,
            updateButton,
            createButton,
            cancelCreateButton,
        } = actions;

        return (
            <>
                {filteredData.map((data, index) => (
                    <PrimaryRow
                        p="1.7rem 1.3rem 1.7rem 2.3rem"
                        key={data.cpf}
                        transparent={index % 2 !== 0}
                    >
                        <EmplloyeeCells fields={fields} data={data} />

                        <Flex gap={"2rem"} flex={1} justify={"end"}>
                            {!data.editing && (
                                <>
                                    <ActionButton
                                        id={data.id}
                                        imagePath={editButton.imagePath}
                                        onClick={editButton.onClick}
                                        aria-label={`Editar ${data.name}`}
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
                        </Flex>
                    </PrimaryRow>
                ))}

                {addingData && (
                    <PrimaryRow transparent={employeeData.length % 2 != 0}>
                        <EmplloyeeCells fields={fields} data={addingData} />

                        <Flex gap={"2rem"} flex={1} justify={"end"}>
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
                        </Flex>
                    </PrimaryRow>
                )}
            </>
        );
    }
);
