import { Flex, Input } from "@chakra-ui/react";
import { globalColors } from "@/theme/theme";
import { SidebarLinkIcon } from "../sidebar/SidebarLinkIcon";

interface SearchBarInterface {
    onchange: Function;
}

export function SearchBar({ onchange }: SearchBarInterface) {
    const { contentSecondary, borderSecondary } = globalColors;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onchange(e.target.value);
    };

    return (
        <Flex
            p={"1.1rem 1.3rem"}
            alignItems={"center"}
            gap={"1rem"}
            w={"25rem"}
            border={`1px solid ${borderSecondary}`}
            borderRadius={"0.8rem"}
            h={"3.7rem"}
        >
            <Input
                type="text"
                border={"none"}
                outline={"none"}
                flex={1}
                color={contentSecondary}
                placeholder="Digite para pesquisar..."
                onChange={handleChange}
            />

            <SidebarLinkIcon imagePath="search" />
        </Flex>
    );
}
