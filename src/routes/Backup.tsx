import { Flex, Text } from "@chakra-ui/react";

import Cookies from "js-cookie";
import { BaseSectionPanel } from "@/fragments/layout/BaseSectionPanel";
import { PrivateRoute } from "./PrivateRoute";

export function Backup() {
    return (
        <PrivateRoute>
            <BaseSectionPanel>
                <Text as={"h1"}>BACKUP</Text>

                <Text>Página em desenvolvimento</Text>

                <Flex>
                    <Text>Token Carregado: {Cookies.get("sessionToken")}</Text>
                </Flex>
            </BaseSectionPanel>
        </PrivateRoute>
    );
}
