import { createGlobalStyle } from "styled-components";

/* Lato */
import LatoRegular from './assets/fonts/Lato/Lato-Regular.ttf';
import LatoItalic from './assets/fonts/Lato/Lato-Italic.ttf'
import LatoBold from './assets/fonts/Lato/Lato-Bold.ttf'
import LatoBoldItalic from './assets/fonts/Lato/Lato-BoldItalic.ttf'
import LatoLight from './assets/fonts/Lato/Lato-Light.ttf'
import LatoLightItalic from './assets/fonts/Lato/Lato-LightItalic.ttf'
import LatoThin from './assets/fonts/Lato/Lato-Thin.ttf'
import LatoThinItalic from './assets/fonts/Lato/Lato-ThinItalic.ttf'
import LatoBlack from './assets/fonts/Lato/Lato-Black.ttf'
import LatoBlackItalic from './assets/fonts/Lato/Lato-BlackItalic.ttf'

export const LoadFontLato = createGlobalStyle`
    @font-face {
        font-family: "Lato";
        src: url(${LatoRegular}) format("truetype");
        font-weight: normal;
        font-style: normal;
    }

    @font-face {
        font-family: "Lato";
        src: url(${LatoItalic}) format("truetype");
        font-weight: normal;
        font-style: italic;
    }

    @font-face {
        font-family: "Lato";
        src: url(${LatoBold}) format("truetype");
        font-weight: bold;
        font-style: normal;
    }

    @font-face {
        font-family: "Lato";
        src: url(${LatoBoldItalic}) format("truetype");
        font-weight: bold;
        font-style: italic;
    }

    @font-face {
        font-family: "Lato";
        src: url(${LatoLight}) format("truetype");
        font-weight: light;
        font-style: normal;
    }

    @font-face {
        font-family: "Lato";
        src: url(${LatoLightItalic}) format("truetype");
        font-weight: light;
        font-style: italic;
    }

    @font-face {
        font-family: "Lato";
        src: url(${LatoThin}) format("truetype");
        font-weight: thin;
        font-style: normal;
    }

    @font-face {
        font-family: "Lato";
        src: url(${LatoThinItalic}) format("truetype");
        font-weight: thin;
        font-style: italic;
    }

    @font-face {
        font-family: "Lato";
        src: url(${LatoBlack}) format("truetype");
        font-weight: black;
        font-style: normal;
    }

    @font-face {
        font-family: "Lato";
        src: url(${LatoBlackItalic}) format("truetype");
        font-weight: black;
        font-style: italic;
    }
`
