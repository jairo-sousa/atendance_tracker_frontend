import { Flex, Span, Text } from "@chakra-ui/react";
import { BrandSectionTitle } from "./structure/BrandSectionTitle";
import { SecondaryDivisor } from "./structure/SecondaryDivisor";
import { BaseStack } from "./structure/BaseStack";
import { PrimaryRow } from "./structure/PrimaryRow";
import { QuaternaryHeaderCell } from "./structure/QuaternaryHeaderCell";
import { BaseCell } from "./structure/BaseCell";
import { useEffect, useState } from "react";

const staticDaySummary = [
    {
        name: "Mateus",
        lastRecord: "07:57",
        status: "ENTRADA",
        nextRecord: "11:00 - ALMOÇO INÍCIO",
        Presence: true,
        minutesLate: 0,
    },
    {
        name: "Regina",
        lastRecord: "07:57",
        status: "ENTRADA",
        nextRecord: "11:00 - ALMOÇO INÍCIO",
        Presence: true,
        minutesLate: 0,
    },
    {
        name: "Lucas",
        lastRecord: "11:00",
        status: "ALMOÇO INÍCIO",
        nextRecord: "13:00 - ALMOÇO FIM",
        Presence: true,
        minutesLate: 0,
    },
    {
        name: "Isaac",
        lastRecord: "11:01",
        status: "ALMOÇO INÍCIO",
        nextRecord: "13:01 - ALMOÇO FIM",
        Presence: true,
        minutesLate: 0,
    },
    {
        name: "Eduardo",
        lastRecord: "08:32",
        status: "FALTA POR ATRASO",
        nextRecord: "11:00 - ALMOÇO INÍCIO",
        Presence: false,
        minutesLate: 32,
    },
];

interface DaySummary {
    name: string;
    lastRecord: string;
    status: string;
    nextRecord: string;
    Presence: boolean;
    minutesLate: number;
}

export function WorkdaySummary() {
    const [daySummary, setDaySummary] = useState<DaySummary[]>([]);

    useEffect(() => {
        setDaySummary(staticDaySummary);
    }, []);

    return (
        daySummary.length && (
            <Flex
                // SECONDARY SIDE PANEL
                direction={"column"}
                justify={"start"}
                align={"start"}
                gap={"2rem"}
                w={"72rem"}
                h={"100%"}
                p={"3rem 5.6rem 0 5rem"}
                backgroundColor={"var(--background-secondary)"}
                overflowY={"scroll"}
                scrollbarWidth={"none"}
                css={{
                    "&::-webkit-scrollbar": {
                        display: "none",
                    },
                    "&": {
                        msOverflowStyle: "none",
                    },
                }}
            >
                <BrandSectionTitle>REGISTROS DE HOJE</BrandSectionTitle>
                <BaseStack>
                    <SecondaryDivisor />
                    {/* SUMMARY HEADER */}
                    <PrimaryRow transparent>
                        <QuaternaryHeaderCell>Nome</QuaternaryHeaderCell>
                        <QuaternaryHeaderCell>
                            Último registro
                        </QuaternaryHeaderCell>
                        <QuaternaryHeaderCell>
                            Próximo registro
                        </QuaternaryHeaderCell>
                    </PrimaryRow>

                    {daySummary.map((data, index) => (
                        <PrimaryRow
                            key={`${data.name} - ${index}`}
                            transparent={index % 2 != 0}
                        >
                            <BaseCell>{data.name}</BaseCell>
                            <BaseCell
                                customStyle={{
                                    minWidth: "19.3rem",
                                }}
                            >
                                <Span
                                    color={
                                        data.Presence
                                            ? "var(--content-success)"
                                            : "var(--content-error)"
                                    }
                                >
                                    {data.lastRecord}
                                </Span>
                                <Span
                                    color={
                                        !data.Presence
                                            ? "var(--content-error)"
                                            : ""
                                    }
                                >
                                    {` - ${data.status}`}
                                </Span>
                            </BaseCell>
                            <BaseCell>{data.nextRecord}</BaseCell>
                        </PrimaryRow>
                    ))}
                </BaseStack>
                <BrandSectionTitle
                    customStyle={{
                        marginTop: "5rem",
                    }}
                >
                    Avisos
                </BrandSectionTitle>
                <BaseStack gap="1rem">
                    {daySummary.map(
                        (data) =>
                            !data.Presence && (
                                <PrimaryRow>
                                    <Text
                                        fontSize={"1.6rem"}
                                        fontWeight={500}
                                        color={"var(--content-secondary)"}
                                    >
                                        <Span color={"var(--content-error)"}>
                                            {data.name}
                                        </Span>
                                        {`: Atrasou ${data.minutesLate} minutos! Você não
                                        será pago pelo dia de hoje e receberá uma multa.
                                        Chegue mais cedo na próxima.`}
                                    </Text>
                                </PrimaryRow>
                            )
                    )}
                </BaseStack>
            </Flex>
        )
    );
}
