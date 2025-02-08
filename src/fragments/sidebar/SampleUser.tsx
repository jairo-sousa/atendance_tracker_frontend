import { Image } from "@chakra-ui/react";

export function SampleUser() {
    return (
        <Image
            src="/user_profile_black.png"
            w={"14rem"}
            h={"14rem"}
            objectPosition={"50% -25%"}
            borderRadius={"50%"}
        />
    );
}
