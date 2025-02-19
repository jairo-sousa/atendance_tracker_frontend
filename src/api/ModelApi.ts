import { globalEnv } from "@/globalEnv";
import { ModelApiInterface } from "@/interfaces/ModelInterface";

import axios, { AxiosResponse } from "axios";

const { API_URL } = globalEnv;

export class ModelApi implements ModelApiInterface {
    async get(seession_token: string, route: string): Promise<AxiosResponse> {
        const response = await axios.get(`${API_URL}/${route}`, {
            headers: {
                Authorization: seession_token,
            },
        });
        return response;
    }
}
