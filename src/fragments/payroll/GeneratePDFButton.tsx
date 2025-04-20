import { Button, Image } from "@chakra-ui/react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

interface GeneratePDFButtonInterface {
    printHtml: HTMLElement;
}

export function GeneratePDFButton({ printHtml }: GeneratePDFButtonInterface) {
    const handleDownloadPdf = async () => {
        const canvas = await html2canvas(printHtml, {
            scale: 2,
        });
        const data = canvas.toDataURL("image/png");

        const pdf = new jsPDF({
            orientation: "portrait",
            unit: "px",
            format: "a4",
        });

        const imageProperties = pdf.getImageProperties(data);
        const pdfWidth = pdf.internal.pageSize.getWidth();

        const pdfHeight =
            (imageProperties.height * pdfWidth) / imageProperties.width;

        pdf.addImage(data, "PNG", 0, 0, pdfWidth, pdfHeight);
        pdf.save("folha_de_pagamento.pdf");
    };

    return (
        <Button
            onClick={handleDownloadPdf}
            backgroundColor={"transparent"}
            p={0}
            h={"100%"}
        >
            <Image
                cursor={"pointer"}
                src={"pdf.svg"}
                objectFit={"contain"}
                h={"100%"}
            />
        </Button>
    );
}
