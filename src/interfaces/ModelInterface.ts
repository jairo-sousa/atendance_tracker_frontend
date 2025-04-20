import { AxiosResponse } from "axios";
import { EntityBase } from "./EntityInterface";

export interface ModelApiInterface {
    get(
        seessionToken: string,
        route: string,
        param?: string
    ): Promise<AxiosResponse>;
    create(
        seessionToken: string,
        route: string,
        data: EntityBase
    ): Promise<AxiosResponse>;
    update(
        sessionToken: string,
        route: string,
        data: EntityBase
    ): Promise<AxiosResponse>;
    delete(
        seessionToken: string,
        route: string,
        id: string
    ): Promise<AxiosResponse>;
}
