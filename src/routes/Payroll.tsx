import { BaseSectionPanel } from "@/fragments/layout/BaseSectionPanel";
import { RouteHeader } from "@/fragments/layout/RouteHeader";
import { RouteNavigation } from "@/fragments/layout/RouteNavigation";
import { PrimaryRouteTitle } from "@/fragments/text/PrimaryRouteTitle";
import { PrivateRoute } from "./PrivateRoute";
import { useEffect, useState } from "react";
import { DatePicker } from "@/components/detailingTable/DatePicker";
import { getDateNowParameters } from "@/modules/date/dateApi";

export function Payroll() {
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");

    const handleStartDateChange = (value: string) => setStartDate(value);
    const handleEndDateChange = (value: string) => setEndDate(value);

    useEffect(() => {
        const setInitialPeriod = async () => {
            const { date } = await getDateNowParameters();

            const startPeriod = new Date(date);
            startPeriod.setDate(startPeriod.getDate() - 6);

            const startDate = startPeriod.toISOString().split("T")[0];

            setEndDate(date);
            setStartDate(startDate);
        };
        setInitialPeriod();
    }, []);

    return (
        <PrivateRoute>
            <>
                <RouteNavigation></RouteNavigation>
                <BaseSectionPanel>
                    <RouteHeader>
                        <PrimaryRouteTitle>Pagamento</PrimaryRouteTitle>
                        de:
                        <DatePicker
                            onchange={handleStartDateChange}
                            value={startDate}
                        />
                        até:
                        <DatePicker
                            onchange={handleEndDateChange}
                            value={endDate}
                        />
                    </RouteHeader>
                </BaseSectionPanel>
            </>
        </PrivateRoute>
    );
}
