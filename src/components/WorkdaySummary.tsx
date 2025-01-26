import { BrandSectionTitle } from "./structure/BrandSectionTitle";
import { SecondaryDivisor } from "./structure/SecondaryDivisor";
import { BaseStack } from "./structure/BaseStack";
import { SecondarySidePanel } from "./structure/SecondarySidePanel";
import { SummmaryTableHeader } from "./SummmaryTableHeader";

import { DaySummaryData, SummaryTableBody } from "./SummaryTableBody";
import { WarningBoard } from "./WarningBoard";

import { useEffect, useState } from "react";

const staticDaySummaryData: DaySummaryData[] = [
    {
        cpf: "Mateus",
        lastRecord: "07:57",
        status: "ENTRADA",
        nextRecord: "11:00 - ALMOÇO INÍCIO",
        presence: true,
        minutesLate: 0,
    },
    {
        name: "Regina",
        lastRecord: "07:57",
        status: "ENTRADA",
        nextRecord: "11:00 - ALMOÇO INÍCIO",
        presence: true,
        minutesLate: 0,
    },
    {
        name: "Lucas",
        lastRecord: "11:00",
        status: "ALMOÇO INÍCIO",
        nextRecord: "13:00 - ALMOÇO FIM",
        presence: true,
        minutesLate: 0,
    },
    {
        name: "Isaac",
        lastRecord: "11:01",
        status: "ALMOÇO INÍCIO",
        nextRecord: "13:01 - ALMOÇO FIM",
        presence: true,
        minutesLate: 0,
    },
    {
        name: "Eduardo",
        lastRecord: "08:32",
        status: "FALTA POR ATRASO",
        nextRecord: "11:00 - ALMOÇO INÍCIO",
        presence: false,
        minutesLate: 32,
        absentByLate: true,
    },
    {
        name: "Tiago",
        lastRecord: "18:00",
        status: "FALTA POR AUSÊNCIA",
        nextRecord: "18:00 - SAÍDA",
        presence: false,
        minutesLate: 0,
    },
];

export function WorkdaySummary() {
    const [daySummaryData, setDaySummaryData] = useState<DaySummaryData[]>([]);

    useEffect(() => {
        setDaySummaryData(staticDaySummaryData);
    }, []);

    return (
        daySummaryData.length && (
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
            </SecondarySidePanel>
        )
    );
}
