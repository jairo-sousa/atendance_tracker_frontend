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
    const { session_token } = useOutletContext<{ session_token?: string }>();

    const [backup, setBackup] = useState<Blob>();
    const [file, setFile] = useState<File | null>(null);

    const apiService = new ApiService();

    const handleBackup = async () => {
        if (session_token) {
            const result = await apiService.backup(session_token);
            setBackup(result?.data);
        }
    };

    const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files.length > 0) {
            setFile(event.target.files[0]);
        }
    };

    const handleRestore = async () => {
        if (session_token && file) {
            await apiService.restore(session_token, file);
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
