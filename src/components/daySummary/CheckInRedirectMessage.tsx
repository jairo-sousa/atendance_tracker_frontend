import { Link } from "@chakra-ui/react";
import { DialogSubtitle } from "../../fragments/text/DialogSubtitle";
import { globalColors } from "@/theme/theme";

const { contentBrand } = globalColors;

export function CheckInRedirectMessage() {
    return (
        <DialogSubtitle>
            Registro de ponto?{" "}
            <Link href="/" color={contentBrand} textDecoration={"underline"}>
                Clique aqui
            </Link>
        </DialogSubtitle>
    );
}
