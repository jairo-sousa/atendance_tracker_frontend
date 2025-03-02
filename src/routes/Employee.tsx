import { RouteHeader } from "@/fragments/layout/RouteHeader";
import { BaseSectionPanel } from "@/fragments/layout/BaseSectionPanel";
import { RouteNavigation } from "@/fragments/layout/RouteNavigation";
import { PrimaryRouteTitle } from "@/fragments/text/PrimaryRouteTitle";
import { EntityRows } from "@/components/detailingTable/EntityRows";
import { DetailingTableHeader } from "@/components/detailingTable/DetailingTableHeader";
import { createRef, useState } from "react";
import { SearchBar } from "@/components/detailingTable/SearchBar";
import { BrandButton } from "@/fragments/form/BrandButton";
import { PrivateChildRouteInterface } from "./PrivateRoute";

import Cookies from "js-cookie";
import { EntityField } from "@/interfaces/EntityInterface";

export const emplloyeeFields: EntityField[] = [
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
                    <EntityRows
                        ref={rowRef}
                        searchQuery={searchQuery}
                        searchKey="name"
                        entityfields={emplloyeeFields}
                        session_token={session_token}
                        route="employee"
                    />
                )}
            </BaseSectionPanel>
        </>
    );
}
