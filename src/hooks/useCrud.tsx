import { useEffect, useState } from "react";

export interface EntityData {
    id: string;
    editing: boolean;
    [key: string]: any;
}

export interface UseCrudInterface<T extends EntityData> {
    url: string;
    fields: string[];
}

export function useCrud<T extends EntityData>({
    fields,
    url,
}: UseCrudInterface<T>) {
    const [data, setData] = useState<T[]>();
    const [addingData, setAddingData] = useState<T | null>(null);

    const sampleData: T[] = [
        {
            id: "sajjdfn-saflks",
            cpf: "123456789",
            name: "João",
            phone: "5599999999",
            editing: false,
        } as unknown as T,
        {
            id: "ew.mn-.mnsdiu",
            cpf: "987654321",
            name: "Maria",
            editing: false,
        } as unknown as T,
    ];

    const handleAdd = () => {
        console.log("Criando novo ");
        if (!addingData) {
            const voidEntity: Record<string, any> = {
                id: "",
                editing: true,
            };

            fields.forEach((field) => {
                voidEntity[field] = "";
            });
            setAddingData(voidEntity as T);

            const updatedData = data?.map((item) => {
                if (item.editing) {
                    return { ...item, editing: false };
                }
                return item;
            });
            setData(updatedData);
        }
    };

    const handleEdit = (id: string) => {
        console.log("Editando: ", id);

        const updatedData = data?.map((item) => {
            if (item.id === id) {
                return { ...item, editing: true };
            } else {
                return { ...item, editing: false };
            }
        });

        setData(updatedData);
        setAddingData(null);
    };

    const handleCancelEdit = (id: string) => {
        console.log("Cancelando edição de: ", id);

        const updatedData = data?.map((data) => {
            if (data.id === id) {
                return { ...data, editing: false };
            }
            return data;
        });
        setData(updatedData);
    };

    const handleCancelCreate = () => {
        console.log(addingData?.name);
        console.log("Cancelando criação", addingData?.cpf);
        setAddingData(null);
    };

    // CRUD
    const handleCreate = () => {
        // POST AT API + TOAST HANDLING
        console.log(addingData?.name);
        console.log("Criando com cpf: ", addingData?.cpf);
        setAddingData(null);
    };

    const handleGet = () => {
        // TODO REPLACE WITH GET AT API
        console.log("Buscando Dados em: ", url);
        setData(sampleData);
    };

    const handleUpdate = (id: string, editingData: T | null) => {
        // TODO GET DATA + PUT AT API + TOAST HANDLING
        console.log(editingData);
        const updatedData = data?.map((item) => {
            if (item.id === id) {
                console.log("Atualizando: ", item.name);
                return { ...item, editing: false };
            }
            return item;
        });
        setData(updatedData);
    };

    const handleDelete = (id: string) => {
        // TODO GET DATA + DELETE AT API + TOAST HANDLING
        console.log("Removendo id: ", id);
    };

    useEffect(handleGet, []);

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

    return {
        data,
        addingData,
        actions,
        handleAdd,
        handleEdit,
        handleCancelEdit,
        handleCreate,
        handleCancelCreate,
        handleUpdate,
        handleDelete,
    };
}
