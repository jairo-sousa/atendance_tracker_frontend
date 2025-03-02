export interface EntityField {
    field: string;
    value: string;
}

export interface EntityBase {
    id: string;
    [key: string]: any;
}

export interface EntityData extends EntityBase {
    editing: boolean;
}

export type EntityRenderKey = keyof EntityBase;
