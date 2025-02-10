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
}
