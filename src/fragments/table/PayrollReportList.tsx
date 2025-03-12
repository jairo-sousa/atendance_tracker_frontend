import { DayReportBase } from "@/interfaces/ReportInterface";
import { PrimaryRow } from "./PrimaryRow";
import { PayrollCell } from "./PayrollCell";
import { SecondaryDivisor } from "../layout/SecondaryDivisor";
import { Box, Flex } from "@chakra-ui/react";
import { globalColors } from "@/theme/theme";

interface PayrollReportListInterface {
    dayReports: (DayReportBase | null)[] | undefined;
}

export function PayrollReportList({ dayReports }: PayrollReportListInterface) {
    if (!dayReports) return null;

    const formatCell = (value: string | number, key: string) => {
        if (key === "dayValue") return Number(value).toFixed(2);

        return value;
    };

    const rowPadding = "1rem 1.3rem";

    return (
        <>
            <Flex
                direction={"column"}
                w={"100%"}
                gap={"2rem"}
                h={"fit-content"}
            >
                <Box w={"100%"}>
                    {dayReports.map(
                        (data, index) =>
                            data && (
                                <PrimaryRow
                                    key={`${data.date} - ${index}`}
                                    transparent={index % 2 !== 0}
                                    p={rowPadding}
                                >
                                    {Object.keys(data).map((key) => (
                                        <PayrollCell key={key}>
                                            {formatCell(
                                                data[
                                                    key as keyof DayReportBase
                                                ],
                                                key
                                            )}
                                        </PayrollCell>
                                    ))}
                                </PrimaryRow>
                            )
                    )}
                </Box>

                <SecondaryDivisor />
            </Flex>
        </>
    );
}
