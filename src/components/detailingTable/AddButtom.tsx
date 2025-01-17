import { Button } from "@chakra-ui/react";

interface AddButtonInterface {
    text: string;
    onClick: Function;
}

export function AddButton({ text, onClick }: AddButtonInterface) {
    return (
        <Button
            onClick={() => {
                onClick();
            }}
        >
            {text}
        </Button>
    );
}
