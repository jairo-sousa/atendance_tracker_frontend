import { Flex, Text } from "@chakra-ui/react";

import Cookies from "js-cookie";
import { BaseSectionPanel } from "@/components/structure/BaseSectionPanel";
import { PrivateRoute } from "./PrivateRoute";

export function Payroll() {
    return (
        <PrivateRoute>
            <BaseSectionPanel>
                <Text as={"h1"}>PAGAMENTO</Text>

                <Text>Página em desenvolvimento</Text>

                <Flex>
                    <Text>Token Carregado: {Cookies.get("sessionToken")}</Text>
                </Flex>
            </BaseSectionPanel>
        </PrivateRoute>
    );
}
