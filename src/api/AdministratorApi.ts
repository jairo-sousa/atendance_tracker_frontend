import { globalEnv } from "@/globalEnv";
import { AdministratorApiInterface } from "@/interfaces/AdministratorInterface";

import axios, { AxiosResponse } from "axios";

const { API_URL } = globalEnv;

export class AdministratorApi implements AdministratorApiInterface {
    async login(
        login: string,
        password: string
    ): Promise<AxiosResponse | null> {
        const ROUTE = "administrator/login";

        const response = await axios.post(`${API_URL}/${ROUTE}`, {
            login,
            password_hash: password,
        });

        return response || null;
    }

    async logout(session_token: string): Promise<AxiosResponse | null> {
        const ROUTE = "administrator/logout";

        const response = await axios.post(
            `${API_URL}/${ROUTE}`,
            {},
            {
                headers: {
                    authorization: session_token,
                },
            }
        );

        return response || null;
    }

    async backup(session_token: string): Promise<AxiosResponse<Blob> | null> {
        const ROUTE = "administrator/backup";

        const response = await axios.get<Blob>(`${API_URL}/${ROUTE}`, {
            headers: {
                authorization: session_token,
            },
            responseType: "blob",
        });

        return response || null;
    }

    async restore(
        session_token: string,
        file: File
    ): Promise<AxiosResponse | null> {
        const ROUTE = "administrator/restore";
        const formData = new FormData();
        formData.append("file", file);

        const response = await axios.post(`${API_URL}/${ROUTE}`, formData, {
            headers: {
                authorization: session_token,
                "Content-Type": "multipart/form-data",
            },
        });

        return response || null;
    }
}
