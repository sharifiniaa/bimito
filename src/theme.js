import {createMuiTheme} from '@material-ui/core';

const theme = createMuiTheme({
    palette: {
        secondary: {
            main: '#28b5b5',
            contrastText: '#fff',
        },
    },
    typography: {
        fontFamily: 'IRANSans'
    },
    direction: 'rtl',
});

export default theme;
