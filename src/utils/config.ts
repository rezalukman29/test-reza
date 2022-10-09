import { Dimensions } from "react-native";



export const width = Dimensions.get('window').width;
export const height = Dimensions.get('window').height;



export const COLORS = {
    primary: "#001F2D",
    secondary: "#4D626C",
    error: "#FF9494",
    white: "#FFF",
    gray: "#74858C",
    black: '#000'
};

export const PADDING = {
    small: 10,
    medium: 14,
    white: 18,

};


export const SHADOWS = {
    light: {
        shadowColor: COLORS.black,
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 3,
    },
    medium: {
        shadowColor: COLORS.black,
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,

        elevation: 7,
    },
    dark: {
        shadowColor: COLORS.gray,
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.41,
        shadowRadius: 9.11,

        elevation: 14,
    },
    default: {
        shadowColor: '#7f7f7f',
        shadowOffset: { width: 0, height: 3},
        shadowRadius: 2,
        shadowOpacity: 0.4,
        elevation: 4
    },
    custom: {
        shadowColor: COLORS.gray,
        shadowOffset: { width: 0, height: 2},
        shadowRadius: 2,
        shadowOpacity: 0.4,
        elevation: 4
    }
};

export const SIZES = {
    base: 8,
    desc: 10,
    small: 12,
    font: 14,
    medium: 16,
    large: 18,
    extraLarge: 24,
};

export const FONTS = {
    bold: "SourceSansPro-Bold",
    semiBold: "SourceSansPro-SemiBold",
    medium: "SourceSansPro-Regular",
    regular: "SourceSansPro-Regular",
    light: "SourceSansPro-Light",
    latina: "SourceSansPro-Black",
    pro: "SourceSansPro-BoldItalic"
};

export const SPRING_CONFIG: any = {
    damping: 80,
    overshootClamping: true,
    restDisplacementThreshold: 0.1,
    restSpeedThreshold: 0.1,
    stiffness: 500,
}