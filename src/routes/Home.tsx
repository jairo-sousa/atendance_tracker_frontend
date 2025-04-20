import { HomeContainer } from "@/fragments/layout/HomeContainer";
import { BaseSectionPanel } from "@/fragments/layout/BaseSectionPanel";
import { CheckInDialog } from "@/components/checkInDialog/CheckinDialog";
// import { useState } from "react";
import { RouteNavigation } from "@/fragments/layout/RouteNavigation";
import { RouteHeader } from "@/fragments/layout/RouteHeader";
import { PrimaryRouteTitle } from "@/fragments/text/PrimaryRouteTitle";
// import { DaySummary } from "@/components/daySummary/DaySummary";

export function Home() {
    // const [refreshDaySummary, setRefreshDaySummary] = useState(0);

    const handleRefreshDaySummary = () => {
        // setRefreshDaySummary((prev) => (prev === 0 ? 1 : 0));
    };

    return (
        <>
            <RouteNavigation />
            <BaseSectionPanel>
                <RouteHeader>
                    <PrimaryRouteTitle>Início</PrimaryRouteTitle>
                </RouteHeader>

                <HomeContainer justifyContent={"end"}>
                    {/* <DaySummary renderKey={refreshDaySummary} /> */}

                    <CheckInDialog onRegister={handleRefreshDaySummary} />
                </HomeContainer>
            </BaseSectionPanel>
        </>
    );
}
