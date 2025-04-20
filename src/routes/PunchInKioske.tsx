import { BrandGratientPanel } from "@/fragments/layout/BrandGratientPanel";
import { useCallback } from "react";
import { Toaster } from "@/components/ui/toaster";
import { CheckInDialog } from "@/components/checkInDialog/CheckinDialog";
// import { DaySummary } from "@/components/daySummary/DaySummary";

export function PunchInKioske() {
    // const [refreshDaySummary, setRefreshDaySummary] = useState(0);

    const handleRefreshDaySummary = useCallback(() => {
        // setRefreshDaySummary((prev) => (prev === 0 ? 1 : 0));
    }, []);

    return (
        <BrandGratientPanel>
            <Toaster />
            <CheckInDialog onRegister={handleRefreshDaySummary} />
            {/* <DaySummary renderKey={refreshDaySummary} /> */}
        </BrandGratientPanel>
    );
}
