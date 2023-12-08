import { 
    Color,
    Neutral100,
    Red300, Red500, Red700,
    Orange300, Orange500, Orange700 
} from "./colors.tsx"

export interface MangoTheme {
    color: {
        fg: {
            primary: {
                light: Color
                regular: Color
                heavy: Color
                contrast: Color
            }
            secondary: {
                light: Color
                regular: Color
                heavy: Color
                contrast: Color
            }
        }
        bg: {
            primary: {
                light: Color
                regular: Color
                heavy: Color
                contrast: Color
            }
            secondary: {
                light: Color
                regular: Color
                heavy: Color
                contrast: Color
            }
        }
    }
    font: {

    }
    icon: {

    }
    layout: {

    }
    spacing: {

    }
}

export const ThemeDefaultLight: MangoTheme = {
    color: {
        fg: {
            primary: {
                light: Red300,
                regular: Red500,
                heavy: Red700,
                contrast: Neutral100,
            },
            secondary: {
                light: Orange300,
                regular: Orange500,
                heavy: Orange700,
                contrast: Neutral100,
            },
        },
        bg: {
            primary: {
                light: Red300,
                regular: Red300,
                heavy: Red300,
                contrast: Red300,
            },
            secondary: {
                light: Red300,
                regular: Red300,
                heavy: Red300,
                contrast: Red300,
            },
        },
    },
    font: {

    },
    icon: {

    },
    layout: {

    },
    spacing: {

    },
}

export const ThemeDefaultDark: MangoTheme = {
    color: {
        fg: {
            primary: {
                light: Red300,
                regular: Red500,
                heavy: Red700,
                contrast: Neutral100,
            },
            secondary: {
                light: Orange300,
                regular: Orange500,
                heavy: Orange700,
                contrast: Neutral100,
            },
        },
        bg: {
            primary: {
                light: Red300,
                regular: Red300,
                heavy: Red300,
                contrast: Red300,
            },
            secondary: {
                light: Red300,
                regular: Red300,
                heavy: Red300,
                contrast: Red300,
            },
        },
    },
    font: {

    },
    icon: {

    },
    layout: {

    },
    spacing: {

    },
}
