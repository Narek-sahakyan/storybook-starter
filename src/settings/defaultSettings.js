import { ESDark } from '@core/colors';
import _ from '@lodash';
import { lightBlue, red } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

/**
 * SETTINGS DEFAULTS
 */
export const defaultSettings = {
    customScrollbars: true,
    animations: true,
    direction: 'ltr',
    theme: {
        main: 'default',
    },
};

/**
 * THEME DEFAULTS
 */
export const defaultThemeOptions = {
    typography: {
        fontFamily: ['Muli', 'Roboto', '"Helvetica"', 'Arial', 'sans-serif'].join(','),
        fontWeightLight: 300,
        fontWeightRegular: 400,
        fontWeightMedium: 600,
        useNextVariants: true,
        suppressDeprecationWarnings: true,
    },
};

export const mustHaveThemeOptions = {
    typography: {
        htmlFontSize: 10,
        body1: {
            fontSize: '1.4rem',
        },
        body2: {
            fontSize: '1.4rem',
        },
    },
};

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

export function extendThemeWithMixins(obj) {
    const theme = createMuiTheme(obj);
    return {
        border: (width = 1) => ({
            borderWidth: width,
            borderStyle: 'solid',
            borderColor: theme.palette.divider,
        }),
        borderLeft: (width = 1) => ({
            borderLeftWidth: width,
            borderStyle: 'solid',
            borderColor: theme.palette.divider,
        }),
        borderRight: (width = 1) => ({
            borderRightWidth: width,
            borderStyle: 'solid',
            borderColor: theme.palette.divider,
        }),
        borderTop: (width = 1) => ({
            borderTopWidth: width,
            borderStyle: 'solid',
            borderColor: theme.palette.divider,
        }),
        borderBottom: (width = 1) => ({
            borderBottomWidth: width,
            borderStyle: 'solid',
            borderColor: theme.palette.divider,
        }),
    };
}

export function mainThemeVariations(theme) {
    return {
        mainThemeDark: createMuiTheme(
            _.merge({}, defaultThemeOptions, theme, {
                palette: {
                    type: 'dark',
                    background: {
                        paper: '#1E2125',
                        default: '#121212',
                    },
                },
                ...mustHaveThemeOptions,
            })
        ),
        mainThemeLight: createMuiTheme(
            _.merge({}, defaultThemeOptions, theme, {
                palette: {
                    type: 'light',
                    background: {
                        paper: '#FFFFFF',
                        default: '#F7F7F7',
                    },
                },
                ...mustHaveThemeOptions,
            })
        ),
    };
}
