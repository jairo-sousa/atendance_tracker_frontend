import { BaseSectionPanel } from "@/fragments/layout/BaseSectionPanel";
import { RouteHeader } from "@/fragments/layout/RouteHeader";
import { RouteNavigation } from "@/fragments/layout/RouteNavigation";
import { PrimaryRouteTitle } from "@/fragments/text/PrimaryRouteTitle";
import { EntityField } from "@/interfaces/EntityInterface";
import { createRef } from "react";
import Cookies from "js-cookie";
import { EntityRows } from "@/components/detailingTable/EntityRows";
import { DetailingTableHeader } from "@/components/detailingTable/DetailingTableHeader";

export const workdayFields: EntityField[] = [
    { field: "employee.name", value: "Nome" },
    { field: "date", value: "Data", type: "date" },
    { field: "check_in", value: "Entrada", type: "datetime" },
    { field: "lunch_start", value: "Almoço ida", type: "datetime" },
    { field: "lunch_end", value: "Almoço volta", type: "datetime" },
    { field: "check_out", value: "Saída", type: "datetime" },
    { field: "status", value: "Status" },
];

export function Workday() {
    const rowRef = createRef<{ handleAdd: () => void }>();
    const session_token = Cookies.get("sessionToken");

    return (
        <>
            <RouteNavigation></RouteNavigation>
            <BaseSectionPanel>
                <RouteHeader>
                    <PrimaryRouteTitle>Dias Úteis</PrimaryRouteTitle>
                </RouteHeader>

                <DetailingTableHeader fields={workdayFields} />
                {session_token && (
                    <EntityRows
                        ref={rowRef}
                        entityfields={workdayFields}
                        session_token={session_token}
                        route="workday/2025-02-17"
                    />
                )}
            </BaseSectionPanel>
        </>
    );
}
