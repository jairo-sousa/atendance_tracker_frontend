import { Box, Link } from "@chakra-ui/react";
import { DialogSubtitle } from "./structure/DialogSubtitle";
import { globalColors } from "@/theme/theme";

const { contentBrand } = globalColors;

export function CheckInRedirectMessage() {
    return (
        <DialogSubtitle>
            Registro de ponto?{" "}
            <Link
                href="/check-in"
                color={contentBrand}
                textDecoration={"underline"}
            >
                Clique aqui
            </Link>
        </DialogSubtitle>
    );
}
