import {createMuiTheme} from '@material-ui/core';

const theme = createMuiTheme({
    direction: "rtl",
    overrides: {
        MuiButton: {
            containedSecondary: {
                borderRadius: '23px',
            },
            containedSizeLarge: {
                padding: '8px 40px'
            },
            outlinedSecondary: {
                borderRadius: '23px',
            },
            outlinedSizeLarge: {
                padding: '8px 40px'
            }
        },
        MuiFormHelperText: {
            root: {
                "&$error": {
                    "position": "absolute"
                }
            }
        },

    },
    palette: {
        secondary: {
            main: '#28b5b5',
            contrastText: '#fff',
        },
    },
    typography: {
        fontFamily: 'IRANSans'
    },
});

export default theme;
