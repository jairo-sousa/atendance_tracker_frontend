import { system } from "@chakra-ui/react/preset";

const newStyles = {
    ":root": {
        fontSize: "62.5%",

        textRendering: "optimizeLegibility",
        WebkitFontSmoothing: "antialiased",
        MozOsxFontSmoothing: "grayscale",

        // CONTENT
        "--content-primary": "#000",
        "--content-secondary": "#6C6C6C",
        "--content-tertiary": "#CDCDCD",
        "--content-quaternary": "#ACACAC",
        "--content-brand": "#FEAF00",
        "--content-brand-contrast": "var(--background-primary)",
        "--content-success": "#40C026",
        "--content-error": "#FF0000",

        // BACKGROUND
        "--background-primary": "#fff",
        "--background-secondary": "#F8F8F8",
        "--background-tertiary": "#F2EAE1",
        "--background-brand": "var(--content-brand)",

        // BORDER
        "--border-primary": "var(--content-brand)",
        "--border-secondary": "#E5E5E5",
    },

    "*": {
        margin: 0,
        padding: 0,
        boxSizing: "border-box",
    },

    body: {
        width: "100%",
        height: "100vh",
        backgroundColor: "var(--background-primary)",
        color: "var(--content-primary)",

        fontFamily: "Montserrat",
        fontSize: "1.6rem",
        fontWeight: 500,
    },

    "#root": {
        height: "100%",
        width: "100%",

        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },

    a: {
        textDecoration: "inherit",
    },

    "::placeholder": {
        color: "var(--content-tertiary)",
        opacity: 1,
    },

    "::-ms-input-placeholder": {
        color: "var(--content-tertiary)",
        opacity: 1,
    },
    "input::placeholder": {
        color: "red",
    },
};

Object.assign(system._global[0]["@layer reset"]!, newStyles);

export default system;
