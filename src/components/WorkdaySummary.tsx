import { BrandSectionTitle } from "./structure/BrandSectionTitle";
import { SecondaryDivisor } from "./structure/SecondaryDivisor";
import { BaseStack } from "./structure/BaseStack";
import { SecondarySidePanel } from "./structure/SecondarySidePanel";
import { DayReport } from "./DayReport";

import { DaySummaryData, SummaryTableBody } from "./SummaryTableBody";
import { WarningBoard } from "./WarningBoard";

import { useEffect, useState } from "react";
import { SummmaryTableHeader } from "./SummmaryTableHeader";
import { ReportTableHeader } from "./reportTableHeader";
import { ApiService } from "@/services/ApiService";

export function WorkdaySummary() {
    const apiService = new ApiService();
    const [daySummaryData, setDaySummaryData] = useState<DaySummaryData[]>([]);

    useEffect(() => {
        const getTodaySummary = async () => {
            const daySummary: DaySummaryData[] =
                await apiService.getTodaySummary();

            setDaySummaryData(daySummary);
        };

        getTodaySummary();
    }, []);

    if (!daySummaryData.length) return;

    const checkedOutEmployees = daySummaryData.find((data) => {
        return data.nextRecord.split(" - ")[1] === "DIA ENCERRADO";
    });

    return (
        <SecondarySidePanel>
            <BrandSectionTitle>REGISTROS DE HOJE</BrandSectionTitle>
            <BaseStack>
                <SecondaryDivisor />

                <SummmaryTableHeader />

                <SummaryTableBody daySummaryData={daySummaryData} />
            </BaseStack>

            <BrandSectionTitle marginTop="5rem">Avisos</BrandSectionTitle>
            <BaseStack gap="1rem">
                <SecondaryDivisor />

                <WarningBoard daySummaryData={daySummaryData} />
            </BaseStack>

            {checkedOutEmployees && (
                <>
                    <BrandSectionTitle marginTop="5rem">
                        Relatório do dia
                    </BrandSectionTitle>
                    <BaseStack gap="1rem">
                        <SecondaryDivisor />
                        <ReportTableHeader />
                        <DayReport />
                    </BaseStack>
                </>
            )}
        </SecondarySidePanel>
    );
}
