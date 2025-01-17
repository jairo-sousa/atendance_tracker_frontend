import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { ChakraProvider } from "@chakra-ui/react";
import system from "./theme/theme";

import { RouterProvider } from "react-router";
import { router } from "./router";

document.addEventListener("DOMContentLoaded", function () {
    const container = document.getElementById("root")!;
    const root = createRoot(container);
    root.render(
        <StrictMode>
            <ChakraProvider value={system}>
                <RouterProvider router={router} />
            </ChakraProvider>
        </StrictMode>
    );
});
