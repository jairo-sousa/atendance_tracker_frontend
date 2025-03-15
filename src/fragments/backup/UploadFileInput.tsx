import { Flex, Input } from "@chakra-ui/react";
import { useRef } from "react";

interface UploadFileInputInterface {
    file: File | null;
    onchange: Function;
}

export function UploadFileInput({ file, onchange }: UploadFileInputInterface) {
    const fileInputRef = useRef<HTMLInputElement | null>(null);

    const handleClick = () => {
        fileInputRef.current?.click();
    };

    return (
        <Flex
            alignItems="center"
            justifyContent="center"
            w="fit-content"
            h="4.2rem"
            px={"3rem"}
            borderRadius="0.4rem"
            border="1px solid gray"
            cursor="pointer"
            onClick={handleClick}
        >
            {file ? file.name : "Escolher arquivo"}
            <Input
                ref={fileInputRef}
                display="none"
                type="file"
                onChange={(event) => onchange(event)}
            />
        </Flex>
    );
}
