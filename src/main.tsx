import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { PunchInKioske } from "./PunchInKioske";
import "./index.css";

document.addEventListener("DOMContentLoaded", function () {
    const container = document.getElementById("root")!;
    const root = createRoot(container);
    root.render(
        <StrictMode>
            <PunchInKioske />
        </StrictMode>
    );
});
