export interface EntityField {
    field: string;
    value: string;
}

export interface EntityBase {
    id: string;
    [key: string]: any;
}

export type EntityRenderKey = keyof EntityBase;

export interface EntityData extends EntityBase {
    editing: boolean;
}
