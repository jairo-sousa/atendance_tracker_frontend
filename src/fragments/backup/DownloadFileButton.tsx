import { Image, Link } from "@chakra-ui/react";
import { useEffect, useState } from "react";

interface DownloadFileButtonInterface {
    iconName: string;
    file: Blob;
    fileName: string;
}

export function DownloadFileButton({
    iconName,
    file,
    fileName,
}: DownloadFileButtonInterface) {
    const [url, setUrl] = useState<string>();

    const prepareDowloadLink = () => {
        const blob = new Blob([file], {
            type: "application/octet-stream",
        });

        setUrl(window.URL.createObjectURL(blob));
    };

    useEffect(() => {
        prepareDowloadLink();
    }, []);

    return (
        <Link
            backgroundColor={"transparent"}
            p={0}
            h={"6rem"}
            outline={"none"}
            download={fileName}
            href={url}
        >
            <Image
                cursor={"pointer"}
                src={iconName}
                objectFit={"contain"}
                h={"100%"}
            />
        </Link>
    );
}
