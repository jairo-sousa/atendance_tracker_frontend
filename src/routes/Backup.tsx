import { BaseSectionPanel } from "@/fragments/layout/BaseSectionPanel";
import { RouteHeader } from "@/fragments/layout/RouteHeader";
import { RouteNavigation } from "@/fragments/layout/RouteNavigation";
import { PrimaryRouteTitle } from "@/fragments/text/PrimaryRouteTitle";
import { PrivateRoute } from "./PrivateRoute";

export function Backup() {
    return (
        <PrivateRoute>
            <>
                <RouteNavigation></RouteNavigation>
                <BaseSectionPanel>
                    <RouteHeader>
                        <PrimaryRouteTitle>Backup</PrimaryRouteTitle>
                    </RouteHeader>
                </BaseSectionPanel>
            </>
        </PrivateRoute>
    );
}
