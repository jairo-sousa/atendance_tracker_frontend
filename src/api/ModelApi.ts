import { globalEnv } from "@/globalEnv";
import { EntityData } from "@/hooks/useCrud";
import { ModelApiInterface } from "@/interfaces/ModelInterface";

import axios, { AxiosResponse } from "axios";

const { API_URL } = globalEnv;

export class ModelApi implements ModelApiInterface {
    async create(
        session_token: string,
        route: string,
        data: EntityData
    ): Promise<AxiosResponse> {
        const response = await axios.post(`${API_URL}/${route}`, data, {
            headers: {
                authorization: session_token,
            },
        });
        return response;
    }

    async get(session_token: string, route: string): Promise<AxiosResponse> {
        const response = await axios.get(`${API_URL}/${route}`, {
            headers: {
                Authorization: session_token,
            },
        });
        return response;
    }
}
