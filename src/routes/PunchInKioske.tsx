import { BrandGratientPanel } from "@/fragments/layout/BrandGratientPanel";

import { useState } from "react";
import { WorkdaySummary } from "@/components/workDaySummary/WorkdaySummary";
import { Toaster } from "@/components/ui/toaster";
import { CheckInDialog } from "@/components/CheckInDialog/CheckinDialog";

export function PunchInKioske() {
    const [refreshWorkdaySummary, setRefreshWorkdaySummary] = useState(0);

    const handleRefreshWorkdaySummary = () => {
        setRefreshWorkdaySummary((prev) => (prev === 0 ? 1 : 0));
    };

    return (
        <BrandGratientPanel>
            <Toaster />

            <CheckInDialog onRegister={handleRefreshWorkdaySummary} />

            <WorkdaySummary renderKey={refreshWorkdaySummary} />
        </BrandGratientPanel>
    );
}
