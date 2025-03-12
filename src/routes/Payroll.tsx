import { BaseSectionPanel } from "@/fragments/layout/BaseSectionPanel";
import { RouteHeader } from "@/fragments/layout/RouteHeader";
import { RouteNavigation } from "@/fragments/layout/RouteNavigation";
import { PrimaryRouteTitle } from "@/fragments/text/PrimaryRouteTitle";
import { useEffect, useRef, useState } from "react";
import { getDateNowParameters } from "@/modules/date/dateApi";
import { useOutletContext } from "react-router";
import { ApiService } from "@/services/ApiService";
import { Text } from "@chakra-ui/react";
import { InputPrimary } from "@/components/detailingTable/InputPrimary";
import { BrandButton } from "@/fragments/form/BrandButton";
import {
    OptionInterface,
    SelectPrimary,
} from "@/components/Select/SelectPrimary";
import { EntityBase, EntityField } from "@/interfaces/EntityInterface";
import { ToastService } from "@/services/ToastService";
import { Toaster } from "@/components/ui/toaster";
import { DetailingTableHeader } from "@/components/detailingTable/DetailingTableHeader";
import { PayrollReportList } from "@/fragments/table/PayrollReportList";
import { PeriodReportData } from "@/interfaces/ReportInterface";
import { PayrollDetails } from "@/fragments/table/PayrollDetails";

export const payrollFields: EntityField[] = [
    { field: "date", value: "Data" },
    { field: "timeWorked", value: "Horas trabalhadas" },
    { field: "lateMinutes", value: "Atraso (minutos)" },
    { field: "overtimeMinutes", value: "Hora extra (minutos)" },
    { field: "overtimePrice", value: "Valor hora extra" },
    { field: "status", value: "Status" },
    { field: "dayValue", value: "Valor do dia" },
];

export function Payroll() {
    const { session_token } = useOutletContext<{ session_token?: string }>();
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [periodValue, setPeriodValue] = useState(200);
    const [employeeId, setEmployeeId] = useState("");
    const [employeeList, setEmployeeList] = useState<OptionInterface[]>([]);

    const [payroll, setPayroll] = useState<PeriodReportData>();

    const apiService = new ApiService();
    const { showToast } = ToastService;

    const employeeRef = useRef<HTMLSelectElement>();

    const handleStartDateChange = (value: string) => setStartDate(value);
    const handleEndDateChange = (value: string) => setEndDate(value);

    const handlePeriodValueChange = (value: number) => setPeriodValue(value);

    const handleGeneratePayroll = () => getPayroll();

    const handleEmployeeIdChange = () => {
        const { value } = employeeRef.current || {};
        setEmployeeId(value === "0" ? "" : `${value}`);
    };

    const getPayroll = async () => {
        if (
            !session_token ||
            !startDate ||
            !endDate ||
            !periodValue ||
            employeeId === "" ||
            employeeId === "0"
        ) {
            showToast(
                "Impossível obter pagamento",
                "Preencha todos os campos",
                "error"
            );
            return;
        }

        const result = await apiService.getPeriodReport(
            employeeId,
            String(periodValue),
            startDate,
            endDate,
            session_token
        );
        setPayroll(result);
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

        const getEmployeeList = async () => {
            const result = await apiService.get(session_token!, "employee");
            const EmployeeListData =
                result?.data.map((data: EntityBase) => ({
                    id: data.id,
                    name: data.name,
                })) || [];
            setEmployeeList(EmployeeListData);
        };

        getEmployeeList();
        setInitialPeriod();
    }, []);

    return (
        <>
            <Toaster />
            <RouteNavigation></RouteNavigation>
            <BaseSectionPanel>
                <RouteHeader>
                    <PrimaryRouteTitle>Pagamento</PrimaryRouteTitle>

                    <BrandButton
                        disabled={false}
                        onClick={handleGeneratePayroll}
                    >
                        Gerar Pagamento
                    </BrandButton>
                </RouteHeader>
                <RouteHeader justify="flex-end" noDivisor={true}>
                    <Text>Funcionário:</Text>

                    <SelectPrimary
                        ref={employeeRef}
                        onChange={handleEmployeeIdChange}
                        items={employeeList}
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
                </RouteHeader>

                {payroll && (
                    <DetailingTableHeader fields={payrollFields} noAction />
                )}

                {session_token && payroll && (
                    <PayrollReportList dayReports={payroll.dayReports} />
                )}

                {payroll && <PayrollDetails data={payroll} />}
            </BaseSectionPanel>
        </>
    );
}
