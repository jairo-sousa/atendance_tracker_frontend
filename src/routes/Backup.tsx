import { BaseSectionPanel } from "@/fragments/layout/BaseSectionPanel";
import { RouteHeader } from "@/fragments/layout/RouteHeader";
import { RouteNavigation } from "@/fragments/layout/RouteNavigation";
import { PrimaryRouteTitle } from "@/fragments/text/PrimaryRouteTitle";
import { useOutletContext } from "react-router";

export function Backup() {
    const { session_token } = useOutletContext<{ session_token?: string }>();
    console.log(session_token);
    return (
        <>
            <RouteNavigation></RouteNavigation>
            <BaseSectionPanel>
                <RouteHeader>
                    <PrimaryRouteTitle>Backup</PrimaryRouteTitle>
                </RouteHeader>
            </BaseSectionPanel>
        </>
    );
}
