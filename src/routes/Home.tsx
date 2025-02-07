import { Flex, Text } from "@chakra-ui/react";

import Cookies from "js-cookie";
import { PrivateRoute } from "./PrivateRoute";
import { BaseSectionPanel } from "@/components/structure/BaseSectionPanel";

export function Home() {
    return (
        <PrivateRoute>
            <BaseSectionPanel>
                <Text as={"h1"}>INÍCIO</Text>

                <Text>Página em desenvolvimento</Text>

                <Flex>
                    <Text>Token Carregado: {Cookies.get("sessionToken")}</Text>
                </Flex>
            </BaseSectionPanel>
        </PrivateRoute>
    );
}
