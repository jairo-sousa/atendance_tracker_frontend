import { BaseStack } from "@/fragments/layout/BaseStack";
import { SecondaryDivisor } from "@/fragments/layout/SecondaryDivisor";
import { ReactNode } from "react";

interface SummarySectionInterface {
    children: ReactNode;
    gap?: string;
}

export function SummarySection({ children, gap }: SummarySectionInterface) {
    return (
        <>
            <BaseStack gap={gap}>
                <SecondaryDivisor />
                {children}
            </BaseStack>
        </>
    );
}
