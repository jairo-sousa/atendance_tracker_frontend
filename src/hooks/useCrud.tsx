import { ApiService } from "@/services/ApiService";
import { useEffect, useState } from "react";

export interface EntityData {
    id: string;
    editing: boolean;
    [key: string]: any;
}

export interface UseCrudInterface<T extends EntityData> {
    session_token: string;
    route: string;
    fields: string[];
}

export function useCrud<T extends EntityData>({
    fields,
    session_token,
    route,
}: UseCrudInterface<T>) {
    const apiService = new ApiService();

    const [data, setData] = useState<T[]>();
    const [addingData, setAddingData] = useState<T | null>(null);

    const [editingData, setEditingData] = useState<EntityData>();

    const voidEntity: Record<string, any> = {
        id: "",
        editing: true,
    };

    const handleAdd = () => {
        console.log("Criando novo ");
        if (!addingData) {
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

    const handleCellChange = (editing: Partial<EntityData>) => {
        setEditingData((prevData) => {
            if (!prevData) {
                return voidEntity as EntityData;
            }
            return {
                ...prevData,
                ...editing,
            };
        });
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
        console.log(editingData);
        setAddingData(null);
        setEditingData(voidEntity as EntityData);
    };

    const handleGet = async () => {
        const result = await apiService.get(session_token, route);
        setData(result?.data);
    };

    const handleUpdate = (id: string) => {
        // TODO GET DATA + PUT AT API + TOAST HANDLING
        console.log(editingData);
        const updatedData = data?.map((item) => {
            if (item.id === id) {
                console.log("Atualizando: ", id);
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

    useEffect(() => {
        handleGet();
    }, []);

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
        handleCellChange,
        handleCancelEdit,
        handleCreate,
        handleCancelCreate,
        handleUpdate,
        handleDelete,
    };
}
