import { WorkdaySummary } from "@/components/workDaySummary/WorkdaySummary";
import { PrivateRoute } from "./PrivateRoute";
import { HomeContainer } from "@/fragments/layout/HomeContainer";
import { BaseSectionPanel } from "@/fragments/layout/BaseSectionPanel";
import { CheckInDialog } from "@/components/CheckInDialog/CheckinDialog";
import { useState } from "react";
import { RouteHeader } from "@/fragments/layout/RouteHeader";

export function Home() {
    const [refreshWorkdaySummary, setRefreshWorkdaySummary] = useState(0);

    const handleRefreshWorkdaySummary = () => {
        setRefreshWorkdaySummary((prev) => (prev === 0 ? 1 : 0));
    };
    return (
        <PrivateRoute>
            <BaseSectionPanel>
                <RouteHeader />
                <HomeContainer justifyContent={"end"}>
                    <WorkdaySummary />
                    <CheckInDialog onRegister={handleRefreshWorkdaySummary} />
                </HomeContainer>
            </BaseSectionPanel>
        </PrivateRoute>
    );
}
