import { BrandButton } from "@/fragments/form/BrandButton";
import { BaseSectionPanel } from "@/fragments/layout/BaseSectionPanel";
import { RouteHeader } from "@/fragments/layout/RouteHeader";
import { RouteNavigation } from "@/fragments/layout/RouteNavigation";
import { DownloadFileButton } from "@/fragments/backup/DownloadFileButton";
import { PrimaryRouteTitle } from "@/fragments/text/PrimaryRouteTitle";
import { ApiService } from "@/services/ApiService";
import { ChangeEvent, useState } from "react";
import { useOutletContext } from "react-router";
import { UploadFileInput } from "@/fragments/backup/UploadFileInput";

export function Backup() {
    const { sessionToken } = useOutletContext<{ sessionToken?: string }>();

    const [backup, setBackup] = useState<Blob>();
    const [file, setFile] = useState<File | null>(null);

    const apiService = new ApiService();

    const handleBackup = async () => {
        if (sessionToken) {
            const result = await apiService.backup(sessionToken);
            setBackup(result?.data);
        }
    };

    const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files.length > 0) {
            setFile(event.target.files[0]);
        }
    };

    const handleRestore = async () => {
        if (sessionToken && file) {
            await apiService.restore(sessionToken, file);
        }
    };

    return (
        <>
            <RouteNavigation></RouteNavigation>
            <BaseSectionPanel gap="2rem">
                <RouteHeader>
                    <PrimaryRouteTitle>Backup</PrimaryRouteTitle>

                    {backup && (
                        <DownloadFileButton
                            file={backup}
                            iconName="dump.svg"
                            fileName="backup.dump"
                        />
                    )}
                    <BrandButton disabled={false} onClick={handleBackup}>
                        Gerar Backup
                    </BrandButton>
                </RouteHeader>
                <RouteHeader>
                    <PrimaryRouteTitle>Restore </PrimaryRouteTitle>

                    <UploadFileInput file={file} onchange={handleFileChange} />
                    <BrandButton disabled={false} onClick={handleRestore}>
                        Restaurar Backup
                    </BrandButton>
                </RouteHeader>
            </BaseSectionPanel>
        </>
    );
}
