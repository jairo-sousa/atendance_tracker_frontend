import { Link } from "@chakra-ui/react";
import { DialogSubtitle } from "../../fragments/text/DialogSubtitle";
import { globalColors } from "@/theme/theme";

const { contentBrand } = globalColors;

interface RedirectMessageInterface {
    message: string;
    path: string;
}

export function RedirectMessage({ message, path }: RedirectMessageInterface) {
    return (
        <DialogSubtitle>
            {message}{" "}
            <Link href={path} color={contentBrand} textDecoration={"underline"}>
                Clique aqui
            </Link>
        </DialogSubtitle>
    );
}
