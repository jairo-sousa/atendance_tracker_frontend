import { BrandSectionTitle } from "@/fragments/text/BrandSectionTitle";
import { SummarySection } from "./SummarySection";
import { ReportTableHeader } from "./reportTableHeader";
import { DayReport } from "./DayReport";

export function DayReportSection() {
    return (
        <>
            <BrandSectionTitle>Relatório do dia</BrandSectionTitle>
            <SummarySection gap="1rem">
                <ReportTableHeader />
                <DayReport />
            </SummarySection>
        </>
    );
}
