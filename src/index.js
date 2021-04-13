import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {CssBaseline} from '@material-ui/core';
import './assets/styles/app.css';
//fonts
import './assets/fonts/WebFonts/css/fontiran.css';

import {StylesProvider, ThemeProvider, jssPreset} from '@material-ui/styles';
import {create} from 'jss';
import rtl from 'jss-rtl';
import theme from './theme'


// Configure JSS rtl
const jss = create({plugins: [...jssPreset().plugins, rtl()]});

ReactDOM.render(
    <React.StrictMode>
        <StylesProvider jss={jss}>
            <ThemeProvider theme={theme}>
                <CssBaseline/>
                <App/>
            </ThemeProvider>
        </StylesProvider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
