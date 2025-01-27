import { PrimaryRow } from "./structure/PrimaryRow";
import { BaseCell } from "./structure/BaseCell";
import { useState, useEffect } from "react";
import { DayReportData } from "./SummaryTableBody";

const staticDayReportData: DayReportData[] = [
    {
        name: "Mateus",
        date: "2025-01-26",
        status: "presente",
        lateMinutes: 0,
        overtimeMinutes: 0,
        timeWorked: "00:00",
        dayValue: "16.66",
        overtimePrice: 0,
    },
    {
        name: "Tiago",
        date: "2025-01-26",
        status: "presente",
        lateMinutes: 0,
        overtimeMinutes: 0,
        timeWorked: "00:00",
        dayValue: "16.66",
        overtimePrice: 0,
    },
];

export function DayReport() {
    const [dayReportData, setDayReportData] = useState<DayReportData[]>([]);
    useEffect(() => {
        setDayReportData(staticDayReportData);
    }, []);

    return (
        <>
            {dayReportData.length &&
                dayReportData.map((data) => (
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
