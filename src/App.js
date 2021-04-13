import React from 'react';
import {Container, makeStyles, createStyles} from '@material-ui/core';
import {BrowserRouter as Router, Switch} from 'react-router-dom';

// pages
import Main from './pages/signUp';
import RouteHoc from "./utils/Route";
import AuthProvider from "./context/provider";

const useStyles = makeStyles(() =>
    createStyles({
        container: {
            height: '100%',
            padding: '24px',
        },
    })
)

const App = () => {
    const classes = useStyles();
    return (
        <Container maxWidth="xl" className={classes.container}>
            <Router>
                <Switch>
                    <AuthProvider>
                        <RouteHoc path='/' component={Main}/>
                    </AuthProvider>
                </Switch>
            </Router>
        </Container>
    );
}

export default App;
