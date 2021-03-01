import React, { Suspense } from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = (theme) => ({
    '@global': {
        '[class^="border-"]': {
            borderColor: theme.palette.divider,
        },
        '[class*="border-"]': {
            borderColor: theme.palette.divider,
        },
    },
    root: {
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.primary,
    },
});

function Layout(props) {
    return (
        <main classes={{ root: props.classes.root }} {...props}>
            <Suspense fallback={'loading'}>{/* <Router /> */}Applicaton</Suspense>
        </main>
    );
}

export default withStyles(styles, { withTheme: true })(React.memo(Layout));
