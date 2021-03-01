import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import { ESLight, ESDark } from '../colors';
import { createMuiTheme } from '@material-ui/core/styles';

export const defaultLightTheme = {
    themeName: 'Light',
    palette: {
        type: 'light',
        primary: ESLight,
    },
    typography: {
        fontFamily: ['Muli', 'Roboto', '"Helvetica"', 'Arial', 'sans-serif'].join(','),
        useNextVariants: true,
        suppressDeprecationWarnings: true,
    },
};

export const defaultDarkTheme = {
    themeName: '',
    palette: {
        type: 'dark',
        primary: ESDark,
    },
    typography: {
        fontFamily: ['Muli', 'Roboto', '"Helvetica"', 'Arial', 'sans-serif'].join(','),
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
