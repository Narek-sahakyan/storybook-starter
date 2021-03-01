import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';

import { lightBlue, red } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';
import { ESDark } from '../colors';

export const defaultThemes = {
    default: {
        palette: {
            type: 'light',
            primary: ESDark,
            secondary: {
                light: lightBlue[400],
                main: lightBlue[600],
                dark: lightBlue[700],
            },
            error: red,
        },
        status: {
            danger: 'orange',
        },
        typography: {
            fontFamily: ['Muli', 'Roboto', '"Helvetica"', 'Arial', 'sans-serif'].join(','),
            fontWeightLight: 300,
            fontWeightRegular: 400,
            fontWeightMedium: 600,
            useNextVariants: true,
            suppressDeprecationWarnings: true,
        },
    },
    defaultDark: {
        palette: {
            type: 'dark',
            primary: ESDark,
            secondary: {
                light: lightBlue[400],
                main: lightBlue[600],
                dark: lightBlue[700],
            },
            error: red,
        },
        status: {
            danger: 'orange',
        },
    },
};

const theme = createMuiTheme(defaultThemes);

export default function UIThemeProvider({ children }) {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
        </ThemeProvider>
    );
}
