import { globalEnv } from "@/globalEnv";
import { EntityBase } from "@/interfaces/EntityInterface";
import { ModelApiInterface } from "@/interfaces/ModelInterface";

import axios, { AxiosResponse } from "axios";

const { API_URL } = globalEnv;

export class ModelApi implements ModelApiInterface {
    async create(
        sessionToken: string,
        route: string,
        data: EntityBase
    ): Promise<AxiosResponse> {
        const response = await axios.post(`${API_URL}/${route}`, data, {
            headers: {
                authorization: sessionToken,
            },
        });
        return response;
    }

    async get(
        sessionToken: string,
        route: string,
        param?: string
    ): Promise<AxiosResponse> {
        const response = await axios.get(`${API_URL}/${route}${param || ""}`, {
            headers: {
                Authorization: sessionToken,
            },
        });
        return response;
    }

    async update(
        sessionToken: string,
        route: string,
        data: EntityBase
    ): Promise<AxiosResponse> {
        const response = await axios.put(
            `${API_URL}/${route}/${data.id}`,
            data,
            {
                headers: {
                    authorization: sessionToken,
                },
            }
        );
        return response;
    }

    async delete(
        sessionToken: string,
        route: string,
        id: string
    ): Promise<AxiosResponse> {
        const response = await axios.delete(`${API_URL}/${route}/${id}`, {
            headers: {
                Authorization: sessionToken,
            },
        });
        return response;
    }
}
