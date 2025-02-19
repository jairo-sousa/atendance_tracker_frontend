import { globalEnv } from "@/globalEnv";
import { EntityBase } from "@/hooks/useCrud";
import { ModelApiInterface } from "@/interfaces/ModelInterface";

import axios, { AxiosResponse } from "axios";

const { API_URL } = globalEnv;

export class ModelApi implements ModelApiInterface {
    async create(
        session_token: string,
        route: string,
        data: EntityBase
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

    async update(
        session_token: string,
        route: string,
        data: EntityBase
    ): Promise<AxiosResponse> {
        const response = await axios.put(
            `${API_URL}/${route}/${data.id}`,
            data,
            {
                headers: {
                    authorization: session_token,
                },
            }
        );
        return response;
    }

    async delete(
        session_token: string,
        route: string,
        id: string
    ): Promise<AxiosResponse> {
        const response = await axios.delete(`${API_URL}/${route}/${id}`, {
            headers: {
                Authorization: session_token,
            },
        });
        return response;
    }
}
