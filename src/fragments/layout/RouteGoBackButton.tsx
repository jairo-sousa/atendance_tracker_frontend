import { Button, Image } from "@chakra-ui/react";
import { useNavigate } from "react-router";

export function RouteGoBackButton() {
    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate(-1);
    };

    return (
        <Button onClick={handleGoBack} backgroundColor={"transparent"} p={0}>
            <Image src={"back_arrow.svg"} objectFit={"contain"} h={"1.9rem"} />
        </Button>
    );
}
