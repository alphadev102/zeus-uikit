import { Colors } from "./types";

export const baseColors = {
  failure: "#f56565",
  primary: "#1ac486",
  primaryBright: "#1ac486",
  primaryDark: "#0098A1",
  secondary: "#7645D9",
  success: "#1ac486",
  warning: "#FFB237",
};

export const additionalColors = {
  binance: "#F0B90B",
  overlay: "#0000007a",
  gold: "#FFC700",
  silver: "#B2B2B2",
  bronze: "#E7974D",
};

export const lightColors: Colors = {
  ...baseColors,
  ...additionalColors,
  primary: "#448348",
  secondary: "#448348",
  primaryBright: "#448348",
  primaryDark: "#448348",
  background: "#ffffff",
  backgroundDisabled: "#a3a2a2",
  backgroundAlt: "#ffffff",
  backgroundNav: "#ffffff",
  backgroundTooltip: "#efefef",
  cardHeader: "transparent",
  cardBorder: "#ffffff",
  cardShadow: "#41507659",
  cardDivider: "#efefef",
  contrast: "#191326",
  dropdown: "#efefef",
  dropdownDeep: "#EEEEEE",
  invertedContrast: "#FFFFFF",
  input: "#efefef",
  inputSecondary: "#d7caec",
  tertiary: "#9F7AEA",
  text: "#415076",
  textDisabled: "#FFFFFF",
  textSubtle: "#766e93",
  textActive: "#ff6c3f",
  textInActive: "#415076",
  textPrice: "#ff6c3f",
  disabled: "#a3a2a2",
  hamburger: "#FFFFFF",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #E5FDFF 0%, #F3EFFF 100%)",
    inverseBubblegum: "linear-gradient(139.73deg, #F3EFFF 0%, #E5FDFF 100%)",
    cardHeader: "linear-gradient(111.68deg, #F2ECF2 0%, #E8F2F6 100%)",
    blue: "linear-gradient(180deg, #A7E8F1 0%, #94E1F2 100%)",
    violet: "linear-gradient(180deg, #E2C9FB 0%, #CDB8FA 100%)",
    violetAlt: "linear-gradient(180deg, #CBD7EF 0%, #9A9FD0 100%)",
    gold: "linear-gradient(180deg, #FFD800 0%, #FDAB32 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...additionalColors,
  primary: "#f38dba",
  primaryBright: "#f38dba",
  secondary: "#f38dba",
  background: "#171923",
  backgroundDisabled: "#4a5568",
  backgroundAlt: "#1a202c",
  backgroundNav: "#1a202c",
  backgroundTooltip: "#2d3748",
  cardHeader: "transparent",
  cardBorder: "#1a202c",
  cardShadow: "#f38dba73",
  cardDivider: "#2d3748",
  contrast: "#FFFFFF",
  dropdown: "#2d3748",
  dropdownDeep: "#100C18",
  invertedContrast: "#191326",
  input: "#2d3748",
  inputSecondary: "#2d3748",
  primaryDark: "#0098A1",
  tertiary: "#9F7AEA",
  text: "#F4EEFF",
  textDisabled: "#FFFFFF",
  textSubtle: "#718096",
  textActive: "#f38dba",
  textInActive: "#FFFFFF",
  textPrice: "#0bc5ea",
  disabled: "#4a5568",
  hamburger: "#f38dba",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)",
    inverseBubblegum: "linear-gradient(139.73deg, #3D2A54 0%, #313D5C 100%)",
    cardHeader: "linear-gradient(166.77deg, #3B4155 0%, #3A3045 100%)",
    blue: "linear-gradient(180deg, #00707F 0%, #19778C 100%)",
    violet: "linear-gradient(180deg, #6C4999 0%, #6D4DB2 100%)",
    violetAlt: "linear-gradient(180deg, #434575 0%, #66578D 100%)",
    gold: "linear-gradient(180deg, #FFD800 0%, #FDAB32 100%)",
  },
};
