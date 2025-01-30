import { system } from "@chakra-ui/react/preset";

export const globalColors = {
    // CONTENT
    contentPrimary: "#000",
    contentSecondary: "#6C6C6C",
    contentTertiary: "#CDCDCD",
    contentQuaternary: "#ACACAC",
    contentBrand: "#FEAF00",
    contentBrandContrast: "#000",
    contentSuccess: "#40C026",
    contentError: "#FF0000",

    // BACKGROUND
    backgroundPrimary: "#fff",
    backgroundSecondary: "#F8F8F8",
    backgroundTertiary: "#F2EAE1",
    backgroundBrand: "#FEAF00",

    // BORDER
    borderPrimary: "#FEAF00",
    borderSecondary: "#E5E5E5",
};

const {
    contentPrimary,
    contentSecondary,
    contentTertiary,
    contentQuaternary,
    contentBrand,
    contentBrandContrast,
    contentSuccess,
    contentError,
    backgroundPrimary,
    backgroundSecondary,
    backgroundTertiary,
    backgroundBrand,
    borderPrimary,
    borderSecondary,
} = globalColors;

const newStyles = {
    ":root": {
        fontSize: "62.5%",

        textRendering: "optimizeLegibility",
        WebkitFontSmoothing: "antialiased",
        MozOsxFontSmoothing: "grayscale",

        // HAS TO BE A BETTER WAY
        "--chakra-sizes-sm": "36.4rem !important",
        "--chakra-font-sizes-sm": "1.4rem !important",
        "--chakra-spacing-1": "1rem important",
        "--chakra-spacing-5": "1.4rem important",

        // CONTENT
        "--content-primary": contentPrimary,
        "--content-secondary": contentSecondary,
        "--content-tertiary": contentTertiary,
        "--content-quaternary": contentQuaternary,
        "--content-brand": contentBrand,
        "--content-brand-contrast": contentBrandContrast,
        "--content-success": contentSuccess,
        "--content-error": contentError,

        // BACKGROUND
        "--background-primary": backgroundPrimary,
        "--background-secondary": backgroundSecondary,
        "--background-tertiary": backgroundTertiary,
        "--background-brand": backgroundBrand,

        // BORDER
        "--border-primary": borderPrimary,
        "--border-secondary": borderSecondary,
    },

    "*": {
        margin: 0,
        padding: 0,
        boxSizing: "border-box",
    },

    body: {
        width: "100%",
        height: "100vh",
        backgroundColor: backgroundPrimary,
        color: contentPrimary,

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

    ".css-1nhm9ic": {
        fontSize: "1.6rem !important",
    },

    a: {
        textDecoration: "inherit",
    },

    "::placeholder": {
        color: contentTertiary,
        opacity: 1,
    },

    "::-ms-input-placeholder": {
        color: contentTertiary,
        opacity: 1,
    },
};

Object.assign(system._global[0]["@layer reset"]!, newStyles);

export default system;
