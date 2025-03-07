import { forwardRef, useImperativeHandle } from "react";
import { PrimaryRow } from "@/fragments/table/PrimaryRow";
import { ActionButton } from "./ActionButton";
import { ActionsCell } from "./ActionsCell";
import { EntityField, EntityRenderKey } from "@/interfaces/EntityInterface";
import { useCrud } from "@/hooks/useCrud";
import { EntityCells, getNestedValue } from "./EntityCells";

interface EntityRowsInterface {
    entityfields: EntityField[];
    searchQuery?: string;
    searchKey?: string;
    session_token: string;
    route: string;
    param?: string;
    rowPadding: string;
}

export const EntityRows = forwardRef(
    (
        {
            entityfields,
            searchQuery,
            searchKey,
            session_token,
            route,
            param,
            rowPadding,
        }: EntityRowsInterface,
        ref
    ) => {
        const fieldValues: EntityRenderKey[] = entityfields.map(
            (fieldObj) => fieldObj.field as EntityRenderKey
        );

        const { actions, addingData, data, handleAdd, handleCellChange } =
            useCrud({
                session_token: session_token,
                fields: fieldValues,
                route: route,
                getParam: param,
            });

        useImperativeHandle(ref, () => ({
            handleAdd,
        }));

        if (!data) return null;

        const filteredData =
            searchQuery && searchKey
                ? data.filter((data) =>
                      getNestedValue(data, searchKey)
                          .toLowerCase()
                          .includes(searchQuery.toLowerCase())
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

        return (
            <>
                {filteredData.map((data, index) => (
                    <PrimaryRow
                        p={rowPadding}
                        gap={"1rem"}
                        key={data.id}
                        transparent={index % 2 !== 0}
                    >
                        <EntityCells
                            entityfields={entityfields}
                            data={data}
                            onCellChange={handleCellChange}
                            isCreating={!!addingData}
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
                        <EntityCells
                            entityfields={entityfields}
                            data={addingData}
                            onCellChange={handleCellChange}
                            isCreating={!!addingData}
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
