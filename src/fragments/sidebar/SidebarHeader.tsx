import { Flex } from "@chakra-ui/react";
import { PrimarySidebarSubtitle } from "./PrimarySidebarSubtitle";
import { SampleUser } from "./SampleUser";

export function SidebarHeader() {
    return (
        <Flex
            direction={"column"}
            align={"center"}
            marginBottom={"4rem"}
            gap={"1rem"}
        >
            <SampleUser />

            <PrimarySidebarSubtitle>
                Área do administrador
            </PrimarySidebarSubtitle>
        </Flex>
    );
}
