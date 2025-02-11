import { Flex, Text } from "@chakra-ui/react";

import Cookies from "js-cookie";
import { PrivateRoute } from "./PrivateRoute";
import { BaseSectionPanel } from "@/fragments/layout/BaseSectionPanel";

export function Workday() {
    return (
        <PrivateRoute>
            <BaseSectionPanel>
                <Text as={"h1"}>DIAS ÚTEIS</Text>

                <Text>Página em desenvolvimento</Text>

                <Flex>
                    <Text>Token Carregado: {Cookies.get("sessionToken")}</Text>
                </Flex>
            </BaseSectionPanel>
        </PrivateRoute>
    );
}
