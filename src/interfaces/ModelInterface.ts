import { AxiosResponse } from "axios";
import { EntityBase } from "./EntityInterface";

export interface ModelApiInterface {
    get(seession_token: string, route: string): Promise<AxiosResponse>;
    create(
        seession_token: string,
        route: string,
        data: EntityBase
    ): Promise<AxiosResponse>;
    update(
        session_token: string,
        route: string,
        data: EntityBase
    ): Promise<AxiosResponse>;
    delete(
        seession_token: string,
        route: string,
        id: string
    ): Promise<AxiosResponse>;
}
