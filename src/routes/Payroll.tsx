import { BaseSectionPanel } from "@/fragments/layout/BaseSectionPanel";
import { RouteHeader } from "@/fragments/layout/RouteHeader";
import { RouteNavigation } from "@/fragments/layout/RouteNavigation";
import { PrimaryRouteTitle } from "@/fragments/text/PrimaryRouteTitle";
import { useEffect, useState } from "react";
import { getDateNowParameters } from "@/modules/date/dateApi";
import { useOutletContext } from "react-router";
import { ApiService } from "@/services/ApiService";
import { Text } from "@chakra-ui/react";
import { InputPrimary } from "@/components/detailingTable/InputPrimary";

export function Payroll() {
    const { session_token } = useOutletContext<{ session_token?: string }>();
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [periodValue, setPeriodValue] = useState(200);

    const apiService = new ApiService();

    const handleStartDateChange = (value: string) => setStartDate(value);
    const handleEndDateChange = (value: string) => setEndDate(value);

    const handlePeriodValueChange = (value: number) => setPeriodValue(value);

    const getPayroll = async () => {
        if (session_token) {
            const result = await apiService.getPeriodReport(
                "2a95d053-50e3-4838-ba68-1e3953aa5e18",
                String(periodValue),
                startDate,
                endDate,
                session_token
            );
            console.log(result);
        }
    };

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
        <>
            <RouteNavigation></RouteNavigation>
            <BaseSectionPanel>
                <RouteHeader>
                    <PrimaryRouteTitle>Pagamento</PrimaryRouteTitle>
                </RouteHeader>

                <Text>Funcionário:</Text>
                <InputPrimary
                    value={periodValue}
                    type="number"
                    onchange={handlePeriodValueChange}
                />
                <Text>Valor:</Text>
                <InputPrimary
                    w="20rem"
                    value={periodValue}
                    type="number"
                    onchange={handlePeriodValueChange}
                />
                <Text>de:</Text>
                <InputPrimary
                    w="20rem"
                    type="date"
                    onchange={handleStartDateChange}
                    value={startDate}
                />
                <Text>até:</Text>
                <InputPrimary
                    w="20rem"
                    type="date"
                    onchange={handleEndDateChange}
                    value={endDate}
                />
            </BaseSectionPanel>
        </>
    );
}
