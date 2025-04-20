import { EntityBase, EntityData } from "@/interfaces/EntityInterface";
import { ApiService } from "@/services/ApiService";
import { useEffect, useState } from "react";

export interface Action {
    imagePath: string;
    onClick: Function;
}

export interface Actions {
    [key: string]: Action;
}

export interface UseCrudInterface {
    sessionToken: string;
    route: string;
    getParam?: string;
    fields: (keyof EntityBase)[];
}

export function useCrud<T extends EntityData>({
    sessionToken,
    route,
    getParam,
    fields,
}: UseCrudInterface) {
    const apiService = new ApiService();

    const [data, setData] = useState<T[]>();
    const [addingData, setAddingData] = useState<T | null>(null);

    const [editingData, setEditingData] = useState<EntityData | null>(null);

    const voidEntity: Record<string, any> = {
        editing: true,
    };

    const handleAdd = () => {
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
        const updatedData = data?.map((item) => {
            if (item.id === id) {
                setEditingData(item);
                return { ...item, editing: true };
            } else {
                return { ...item, editing: false };
            }
        });

        setData(updatedData);
        setAddingData(null);
    };

    const handleCellChange = (editing: EntityData) => {
        setEditingData((prevData) => {
            if (!prevData) {
                return editing;
            }
            return {
                ...prevData,
                ...editing,
            };
        });
    };

    const handleCancelEdit = (id: string) => {
        const updatedData = data?.map((data) => {
            if (data.id === id) {
                return { ...data, editing: false };
            }
            return data;
        });
        setData(updatedData);
        setEditingData(null);
    };

    const handleCancelCreate = () => {
        setAddingData(null);
        setEditingData(null);
    };

    // CRUD
    const handleCreate = async () => {
        if (!editingData) return;

        const { editing, ...dataToSend } = editingData;
        await apiService.create(sessionToken, route, dataToSend, () => {
            handleGet(getParam);
        });

        setAddingData(null);
        setEditingData(voidEntity as EntityData);
    };

    const handleGet = async (param?: string) => {
        const result = await apiService.get(sessionToken, route, param);
        setData(result?.data);
    };

    const handleUpdate = async () => {
        if (!editingData) return;

        const { editing, ...dataToSend } = editingData;
        await apiService.update(sessionToken, route, dataToSend, () => {
            handleGet(getParam);
        });

        setEditingData(null);
    };

    const handleDelete = async (id: string) => {
        await apiService.delete(sessionToken, route, id, () => {
            handleGet(getParam);
        });
    };

    useEffect(() => {
        handleGet(getParam);
    }, []);

    const actions: Actions = {
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
