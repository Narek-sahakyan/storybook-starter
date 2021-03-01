import Layout from './Layout';
import UIThemeProvider from './providers/UIThemeProvider';
import { createGenerateClassName, jssPreset, StylesProvider } from '@material-ui/core/styles';
import { create } from 'jss';
import jssExtend from 'jss-plugin-extend';
import rtl from 'jss-rtl';

const jss = create({
    ...jssPreset(),
    plugins: [...jssPreset().plugins, jssExtend(), rtl()],
    insertionPoint: document.getElementById('jss-insertion-point'),
});

const generateClassName = createGenerateClassName();

const App = () => {
    return (
        <StylesProvider jss={jss} generateClassName={generateClassName}>
            <UIThemeProvider>
                <Layout />
            </UIThemeProvider>
        </StylesProvider>
    );
};

export default App;
