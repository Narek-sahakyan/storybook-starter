import { muiTheme } from "storybook-addon-material-ui";
import { darkTheme, lightTheme } from "../src/providers/UIThemeProvider";

export const decorators = [muiTheme([lightTheme, darkTheme])];
