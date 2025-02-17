import { RouteHeader } from "@/fragments/layout/RouteHeader";
import { PrivateRoute } from "./PrivateRoute";
import { BaseSectionPanel } from "@/fragments/layout/BaseSectionPanel";
import { RouteNavigation } from "@/fragments/layout/RouteNavigation";
import { PrimaryRouteTitle } from "@/fragments/text/PrimaryRouteTitle";
import { EmployeeRows } from "@/components/detailingTable/EmployeeRows";
import { DetailingTableHeader } from "@/components/detailingTable/DetailingTableHeader";
import { createRef, useState } from "react";
import { SearchBar } from "@/components/detailingTable/SearchBar";
import { BrandButton } from "@/fragments/form/BrandButton";

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

export function Emplloyee() {
    const [searchQuery, setSearchQuery] = useState("");

    const rowRef = createRef<{
        handleAdd: () => void;
    }>();

    const handleSearchChange = (query: string) => setSearchQuery(query);

    const handleAdd = () => {
        rowRef.current?.handleAdd();
    };

    return (
        <PrivateRoute>
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
                <EmployeeRows
                    ref={rowRef}
                    searchQuery={searchQuery}
                    employeefields={emplloyeeFields}
                />
            </BaseSectionPanel>
        </PrivateRoute>
    );
}
