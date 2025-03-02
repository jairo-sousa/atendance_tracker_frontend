import { EntityData } from "@/interfaces/EntityInterface";
import { ApiService } from "@/services/ApiService";
import { useEffect, useState } from "react";

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
        await apiService.create(session_token, route, dataToSend, handleGet);

        setAddingData(null);
        setEditingData(voidEntity as EntityData);
    };

    const handleGet = async () => {
        const result = await apiService.get(session_token, route);
        setData(result?.data);
    };

    const handleUpdate = async () => {
        if (!editingData) return;

        const { editing, ...dataToSend } = editingData;

        await apiService.update(session_token, route, dataToSend, handleGet);
    };

    const handleDelete = async (id: string) => {
        await apiService.delete(session_token, route, id, handleGet);
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
