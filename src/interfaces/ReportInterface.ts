import { AxiosResponse } from "axios";

export interface DaySummaryData {
    name?: string;
    cpf?: string;
    lastRecord: string;
    status: string;
    nextRecord: string;
    presence: boolean;
    minutesLate: number;
    absentByLate?: boolean;
}

export interface DayReportBase {
    date: string;
    status: string;
    lateMinutes: number;
    overtimeMinutes: number;
    timeWorked: string;
    dayValue: string;
    overtimePrice: number;
}

export interface DayReportData extends DayReportBase {
    name?: string;
    cpf?: string;
}

export interface PeriodReportData {
    startDate: string;
    endDate: string;
    daysShoudWork: number;
    daysWorked: number;
    daysAbsent: number;
    periodValue: string;
    overtimeMinutes: number;
    overtimeToPay: number | null;
    daysWorkedValue: number | null;
    absenceFine: number | null;
    periodValueToPay: number | null;
    dayReports: (DayReportBase | null)[];
}

export interface ReportApiInterface {
    getDateNowParameters(): Promise<AxiosResponse | null>;
    getTodaySummary(): Promise<AxiosResponse>;
    getTodayReport(): Promise<AxiosResponse>;
    getPeriodReport(
        id: string,
        periodValue: string,
        startDate: string,
        endDate: string,
        session_token: string
    ): Promise<AxiosResponse>;
}
