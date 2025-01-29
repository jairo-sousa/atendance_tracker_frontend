import { PrimaryRow } from "./structure/PrimaryRow";
import { BaseCell } from "./structure/BaseCell";
import { useState, useEffect } from "react";
import { DayReportData } from "./SummaryTableBody";
import { ApiService } from "@/services/ApiService";

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
                    <BaseCell>{data.name ? data.name : data.cpf}</BaseCell>
                    <BaseCell>{data.lateMinutes}</BaseCell>
                    <BaseCell>{data.overtimeMinutes}</BaseCell>
                    <BaseCell>{data.timeWorked}</BaseCell>
                </PrimaryRow>
            ))}
        </>
    );
}
