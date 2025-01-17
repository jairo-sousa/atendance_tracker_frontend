import { Box, Flex, Text } from "@chakra-ui/react";
import { useLocation } from "react-router";
import { SidebarLink } from "./SidebarLink";
import { SidebarLinkIcon } from "./SidebarLinkIcon";

interface RouteLinkProps {
    link: {
        name: string;
        path: string;
    };
}

export function RouteLink({ link }: RouteLinkProps) {
    const { name, path } = link;

    const location = useLocation();
    const active = location.pathname === path;

    return (
        <Box as={"li"} w={"100%"}>
            <SidebarLink path={path} active={active}>
                <Flex flex={0.3} justifyContent={"end"}>
                    <SidebarLinkIcon imagePath={path} />
                </Flex>
                <Text flex={0.6}>{name}</Text>
            </SidebarLink>
        </Box>
    );
}
