import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/core/styles";
import { ESLight, ESDark } from "../colors";
import { createMuiTheme } from "@material-ui/core/styles";

export const defaultLightTheme = {
  themeName: "Light",
  overrides: {
    MuiButton: {
      root: {
        padding: "8px 16px",
        marginRight: "8px",
      },
      sizeSmall: {
        fontSize: "13px",
        padding: "5px 10px",
      },
      sizeLarge: {
        fontSize: "16px",
        padding: "15px 40px",
      },
    },
  },
  palette: {
    type: "light",
    primary: ESLight,
  },
  typography: {
    fontFamily: ["Muli", "Roboto", '"Helvetica"', "Arial", "sans-serif"].join(
      ","
    ),
    useNextVariants: true,
    suppressDeprecationWarnings: true,
    button: {
      fontSize: "15px",
      textTransform: "capitalize",
    },
  },
};

export const defaultDarkTheme = {
  themeName: "Dark",
  palette: {
    type: "dark",
    primary: ESDark,
  },
  typography: {
    fontFamily: ["Muli", "Roboto", '"Helvetica"', "Arial", "sans-serif"].join(
      ","
    ),
    useNextVariants: true,
    suppressDeprecationWarnings: true,
  },
};

export const lightTheme = createMuiTheme(defaultLightTheme);
export const darkTheme = createMuiTheme(defaultDarkTheme);

export default function UIThemeProvider({ children }) {
  return (
    <ThemeProvider theme={lightTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
