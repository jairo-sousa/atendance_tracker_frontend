import { PrivateRoute } from "./PrivateRoute";
import { BaseSectionPanel } from "@/fragments/layout/BaseSectionPanel";
import { RouteHeader } from "@/fragments/layout/RouteHeader";
import { RouteNavigation } from "@/fragments/layout/RouteNavigation";
import { PrimaryRouteTitle } from "@/fragments/text/PrimaryRouteTitle";

export function Workday() {
    return (
        <PrivateRoute>
            <RouteNavigation></RouteNavigation>
            <BaseSectionPanel>
                <RouteHeader>
                    <PrimaryRouteTitle>Dias Úteis</PrimaryRouteTitle>
                </RouteHeader>
            </BaseSectionPanel>
        </PrivateRoute>
    );
}
