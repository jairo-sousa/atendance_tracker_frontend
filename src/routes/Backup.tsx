import { BrandButton } from "@/fragments/form/BrandButton";
import { BaseSectionPanel } from "@/fragments/layout/BaseSectionPanel";
import { RouteHeader } from "@/fragments/layout/RouteHeader";
import { RouteNavigation } from "@/fragments/layout/RouteNavigation";
import { DownloadFileButton } from "@/fragments/backup/DownloadFileButton";
import { PrimaryRouteTitle } from "@/fragments/text/PrimaryRouteTitle";
import { ApiService } from "@/services/ApiService";
import { useState } from "react";
import { useOutletContext } from "react-router";

export function Backup() {
    const { session_token } = useOutletContext<{ session_token?: string }>();

    const [backup, setBackup] = useState<Blob>();

    const apiService = new ApiService();

    const handleBackup = async () => {
        if (session_token) {
            const result = await apiService.backup(session_token);
            setBackup(result?.data);
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
            </BaseSectionPanel>
        </>
    );
}
