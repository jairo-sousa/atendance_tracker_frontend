import { BrandSectionTitle } from "../../fragments/text/BrandSectionTitle";
import { SecondarySidePanel } from "../../fragments/layout/SecondarySidePanel";

import { WarningBoard } from "./WarningBoard";

import { useCallback, useEffect, useState } from "react";
import { ApiService } from "@/services/ApiService";
import { SummmaryTableHeader } from "@/components/daySummary/SummmaryTableHeader";
import { SummaryTableBody } from "@/components/daySummary/SummaryTableBody";
import { SummarySection } from "./SummarySection";
import { DayReportSection } from "./DayReportSection";
import { DaySummaryData } from "@/interfaces/ReportInterface";

interface DaySummaryInterface {
    renderKey: number;
}

export function DaySummary({ renderKey }: DaySummaryInterface) {
    const apiService = new ApiService();
    const [daySummaryData, setDaySummaryData] = useState<DaySummaryData[]>([]);
    const [previousRenderKey, setPreviousRenderKey] = useState<number | null>(
        null
    );

    const getTodaySummary = useCallback(async () => {
        const daySummary: DaySummaryData[] = await apiService.getTodaySummary();
        setDaySummaryData(daySummary);
    }, [apiService]);

    useEffect(() => {
        if (renderKey !== previousRenderKey) {
            setPreviousRenderKey(renderKey);
            getTodaySummary();
        }
    }, [renderKey, getTodaySummary, previousRenderKey]);

    const checkedOutEmployees = daySummaryData.some(
        (data) => data.nextRecord.split(" - ")[1] === "DIA ENCERRADO"
    );

    if (!daySummaryData.length)
        return (
            <SecondarySidePanel>
                <BrandSectionTitle>Ainda sem Registros</BrandSectionTitle>
            </SecondarySidePanel>
        );

    return (
        <SecondarySidePanel>
            {/* RECORDS */}
            <BrandSectionTitle firstChild={true}>
                REGISTROS DE HOJE
            </BrandSectionTitle>
            <SummarySection>
                <SummmaryTableHeader />

                <SummaryTableBody
                    key={renderKey}
                    daySummaryData={daySummaryData}
                />
            </SummarySection>

            {/* WARNINGS */}
            <BrandSectionTitle>Avisos</BrandSectionTitle>
            <SummarySection gap="1rem">
                <WarningBoard daySummaryData={daySummaryData} />
            </SummarySection>

            {/* REPORT */}
            {checkedOutEmployees && <DayReportSection />}
        </SecondarySidePanel>
    );
}
