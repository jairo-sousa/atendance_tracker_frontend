import { BaseSectionPanel } from "@/fragments/layout/BaseSectionPanel";
import { RouteHeader } from "@/fragments/layout/RouteHeader";
import { RouteNavigation } from "@/fragments/layout/RouteNavigation";
import { PrimaryRouteTitle } from "@/fragments/text/PrimaryRouteTitle";
import { EntityField } from "@/interfaces/EntityInterface";
import { createRef, useEffect, useState } from "react";
import { EntityRows } from "@/components/detailingTable/EntityRows";
import { DetailingTableHeader } from "@/components/detailingTable/DetailingTableHeader";
import { SearchBar } from "@/components/detailingTable/SearchBar";
import { getDateNowParameters } from "@/modules/date/dateApi";
import { useOutletContext } from "react-router";
import { InputPrimary } from "@/components/detailingTable/InputPrimary";

export const dayFields: EntityField[] = [
    { field: "employee.name", value: "Nome" },
    { field: "date", value: "Data", type: "date" },
    { field: "check_in", value: "Entrada", type: "datetime" },
    { field: "lunch_start", value: "Almoço ida", type: "datetime" },
    { field: "lunch_end", value: "Almoço volta", type: "datetime" },
    { field: "check_out", value: "Saída", type: "datetime" },
    { field: "status", value: "Status" },
];

export function Day() {
    const { sessionToken } = useOutletContext<{ sessionToken?: string }>();
    const [searchQuery, setSearchQuery] = useState("");
    const [dateToGet, setDateToGet] = useState("");

    const rowRef = createRef<{ handleAdd: () => void }>();

    useEffect(() => {
        const setInitialDate = () => {
            const { date } = getDateNowParameters();

            setDateToGet(date);
        };
        setInitialDate();
    }, []);

    const route = "day";
    const param = `/${dateToGet}`;

    const handleSearchChange = (query: string) => setSearchQuery(query);
    const handleDateChange = (value: string) => setDateToGet(value);

    const rowPadding = "1.7rem 1.3rem 1.7rem 1.3rem";
    return (
        <>
            <RouteNavigation>
                <SearchBar onchange={handleSearchChange} />
            </RouteNavigation>
            <BaseSectionPanel>
                <RouteHeader>
                    <PrimaryRouteTitle>Dias Úteis</PrimaryRouteTitle>
                    <InputPrimary
                        type="date"
                        onchange={handleDateChange}
                        value={dateToGet}
                    />
                </RouteHeader>

                <DetailingTableHeader fields={dayFields} />
                {sessionToken && dateToGet && (
                    <EntityRows
                        ref={rowRef}
                        rowPadding={rowPadding}
                        searchQuery={searchQuery}
                        searchKey="employee.name"
                        entityfields={dayFields}
                        sessionToken={sessionToken}
                        route={route}
                        param={param}
                        key={dateToGet}
                    />
                )}
            </BaseSectionPanel>
        </>
    );
}
