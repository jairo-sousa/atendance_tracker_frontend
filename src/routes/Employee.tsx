import { RouteHeader } from "@/fragments/layout/RouteHeader";
import { BaseSectionPanel } from "@/fragments/layout/BaseSectionPanel";
import { RouteNavigation } from "@/fragments/layout/RouteNavigation";
import { PrimaryRouteTitle } from "@/fragments/text/PrimaryRouteTitle";
import { EmployeeRows } from "@/components/detailingTable/EmployeeRows";
import { DetailingTableHeader } from "@/components/detailingTable/DetailingTableHeader";
import { createRef, useEffect, useState } from "react";
import { SearchBar } from "@/components/detailingTable/SearchBar";
import { BrandButton } from "@/fragments/form/BrandButton";
import { PrivateChildRouteInterface } from "./PrivateRoute";

import Cookies from "js-cookie";

export interface EmplloyeeField {
    field: string;
    value: string;
}

interface EmployeeRenderKeys {
    name: string;
    cpf: string;
    phone: string;
}

export type EmployeeRenderKey = keyof EmployeeRenderKeys;

export const emplloyeeFields: EmplloyeeField[] = [
    { field: "name", value: "Nome" },
    { field: "cpf", value: "Cpf" },
    { field: "phone", value: "Telefone" },
];

export function Emplloyee({}: PrivateChildRouteInterface) {
    const [searchQuery, setSearchQuery] = useState("");
    const rowRef = createRef<{ handleAdd: () => void }>();
    const session_token = Cookies.get("sessionToken");

    const handleSearchChange = (query: string) => setSearchQuery(query);

    const handleAdd = () => {
        rowRef.current?.handleAdd();
    };

    return (
        <>
            <RouteNavigation>
                <SearchBar onchange={handleSearchChange} />
            </RouteNavigation>

            <BaseSectionPanel>
                <RouteHeader>
                    <PrimaryRouteTitle>Funcionários</PrimaryRouteTitle>
                    <BrandButton disabled={false} onClick={handleAdd}>
                        Adicionar Funcionário
                    </BrandButton>
                </RouteHeader>

                <DetailingTableHeader fields={emplloyeeFields} />
                {session_token && (
                    <EmployeeRows
                        ref={rowRef}
                        searchQuery={searchQuery}
                        employeefields={emplloyeeFields}
                        session_token={session_token}
                    />
                )}
            </BaseSectionPanel>
        </>
    );
}
