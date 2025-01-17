import { RouteLink } from "./RouteLink";
import { links } from "@/router";

export function SidebarLinkList() {
    const linksToNotRender = new Set(["/login", "/"]);

    const linksToRender = links.filter(
        ({ path }) => !linksToNotRender.has(path)
    );

    return linksToRender.map((linksToRender) => (
        <RouteLink key={linksToRender.path} link={linksToRender} />
    ));
}
