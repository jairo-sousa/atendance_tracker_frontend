import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { ChakraProvider } from "@chakra-ui/react";
import system from "./theme/theme";

import { PunchInKioske } from "./routes/PunchInKioske";

document.addEventListener("DOMContentLoaded", function () {
    const container = document.getElementById("root")!;
    const root = createRoot(container);
    root.render(
        <StrictMode>
            <ChakraProvider value={system}>
                <PunchInKioske />
            </ChakraProvider>
        </StrictMode>
    );
});
