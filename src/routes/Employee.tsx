import { RouteHeader } from "@/fragments/layout/RouteHeader";
import { PrivateRoute } from "./PrivateRoute";
import { BaseSectionPanel } from "@/fragments/layout/BaseSectionPanel";
import { RouteNavigation } from "@/fragments/layout/RouteNavigation";
import { PrimaryRouteTitle } from "@/fragments/text/PrimaryRouteTitle";

export function Emplloyee() {
    return (
        <PrivateRoute>
            <RouteNavigation></RouteNavigation>
            <BaseSectionPanel>
                <RouteHeader>
                    <PrimaryRouteTitle>Funcionários</PrimaryRouteTitle>
                </RouteHeader>
            </BaseSectionPanel>
        </PrivateRoute>
    );
}
