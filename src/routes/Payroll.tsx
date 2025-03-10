import { BaseSectionPanel } from "@/fragments/layout/BaseSectionPanel";
import { RouteHeader } from "@/fragments/layout/RouteHeader";
import { RouteNavigation } from "@/fragments/layout/RouteNavigation";
import { PrimaryRouteTitle } from "@/fragments/text/PrimaryRouteTitle";
import { useEffect, useState } from "react";
import { DatePicker } from "@/components/detailingTable/DatePicker";
import { getDateNowParameters } from "@/modules/date/dateApi";
import { useOutletContext } from "react-router";
import { ApiService } from "@/services/ApiService";

export function Payroll() {
    const { session_token } = useOutletContext<{ session_token?: string }>();
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");

    const handleStartDateChange = (value: string) => setStartDate(value);
    const handleEndDateChange = (value: string) => setEndDate(value);

    const apiService = new ApiService();

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

    useEffect(() => {
        const getPayroll = async () => {
            if (session_token) {
                const result = await apiService.getPeriodReport(
                    "2a95d053-50e3-4838-ba68-1e3953aa5e18",
                    "200",
                    startDate,
                    endDate,
                    session_token
                );
                console.log(result);
            }
        };

        getPayroll();
    }, [endDate, startDate]);

    return (
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
    );
}
