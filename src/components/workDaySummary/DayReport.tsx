import { PrimaryRow } from "../../fragments/table/PrimaryRow";
import { BaseCell } from "../../fragments/table/BaseCell";
import { useState, useEffect } from "react";
import { ApiService } from "@/services/ApiService";
import { DayReportData } from "@/components/workDaySummary/SummaryTableBody";

export function DayReport() {
    const apiService = new ApiService();

    const [dayReportData, setDayReportData] = useState<DayReportData[]>([]);

    useEffect(() => {
        const getTodaySummary = async () => {
            const dayReport: DayReportData[] =
                await apiService.getTodayReport();

            setDayReportData(dayReport);
        };

        getTodaySummary();
    }, []);

    if (!dayReportData.length) return;

    return (
        <>
            {dayReportData.map((data) => (
                <PrimaryRow key={data.name}>
                    <BaseCell>
                        {data.name ? data.name.split(" ")[0] : data.cpf}
                    </BaseCell>
                    <BaseCell>{data.lateMinutes}</BaseCell>
                    <BaseCell>{data.overtimeMinutes}</BaseCell>
                    <BaseCell>{data.timeWorked}</BaseCell>
                </PrimaryRow>
            ))}
        </>
    );
}
