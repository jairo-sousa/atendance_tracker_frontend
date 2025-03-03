import { BaseSectionPanel } from "@/fragments/layout/BaseSectionPanel";
import { RouteHeader } from "@/fragments/layout/RouteHeader";
import { RouteNavigation } from "@/fragments/layout/RouteNavigation";
import { PrimaryRouteTitle } from "@/fragments/text/PrimaryRouteTitle";
import { PrivateRoute } from "./PrivateRoute";

export function Payroll() {
    return (
        <PrivateRoute>
            <>
                <RouteNavigation></RouteNavigation>
                <BaseSectionPanel>
                    <RouteHeader>
                        <PrimaryRouteTitle>Pagamento</PrimaryRouteTitle>
                    </RouteHeader>
                </BaseSectionPanel>
            </>
        </PrivateRoute>
    );
}
