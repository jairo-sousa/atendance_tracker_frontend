import { BaseSectionPanel } from "@/fragments/layout/BaseSectionPanel";
import { RouteHeader } from "@/fragments/layout/RouteHeader";
import { RouteNavigation } from "@/fragments/layout/RouteNavigation";
import { PrimaryRouteTitle } from "@/fragments/text/PrimaryRouteTitle";
import { EntityField } from "@/interfaces/EntityInterface";
import { createRef, useEffect, useState } from "react";
import Cookies from "js-cookie";
import { EntityRows } from "@/components/detailingTable/EntityRows";
import { DetailingTableHeader } from "@/components/detailingTable/DetailingTableHeader";
import { SearchBar } from "@/components/detailingTable/SearchBar";
import { getDateNowParameters } from "@/modules/date/dateApi";
import { DatePicker } from "@/components/detailingTable/DatePicker";
import { PrivateRoute } from "./PrivateRoute";

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
    const [searchQuery, setSearchQuery] = useState("");
    const [dateToGet, setDateToGet] = useState("");

    const rowRef = createRef<{ handleAdd: () => void }>();
    const session_token = Cookies.get("sessionToken");

    useEffect(() => {
        const setInitialDate = async () => {
            const { date } = await getDateNowParameters();

            setDateToGet(date);
        };
        setInitialDate();
    }, []);

    const route = "workday";
    const param = `/${dateToGet}`;

    const handleSearchChange = (query: string) => setSearchQuery(query);
    const handleDateChange = (value: string) => setDateToGet(value);

    const rowPadding = "1.7rem 1.3rem 1.7rem 1.3rem";
    return (
        <PrivateRoute>
            <>
                <RouteNavigation>
                    <SearchBar onchange={handleSearchChange} />
                </RouteNavigation>
                <BaseSectionPanel>
                    <RouteHeader>
                        <PrimaryRouteTitle>Dias Úteis</PrimaryRouteTitle>
                        <DatePicker
                            onchange={handleDateChange}
                            value={dateToGet}
                        />
                    </RouteHeader>

                    <DetailingTableHeader fields={workdayFields} />
                    {session_token && dateToGet && (
                        <EntityRows
                            ref={rowRef}
                            rowPadding={rowPadding}
                            searchQuery={searchQuery}
                            searchKey="employee.name"
                            entityfields={workdayFields}
                            session_token={session_token}
                            route={route}
                            param={param}
                            key={dateToGet}
                        />
                    )}
                </BaseSectionPanel>
            </>
        </PrivateRoute>
    );
}
