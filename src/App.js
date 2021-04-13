import React from 'react';
import {Container, makeStyles, createStyles} from '@material-ui/core';
import {BrowserRouter as Router, Switch} from 'react-router-dom';

import AuthProvider from "./context/provider";
import {PublicRoute, PrivateRoute} from "./utils/Route";

// pages
import SignUp from './pages/signUp';
import Insurance from "./pages/insurance";

const useStyles = makeStyles((theme) =>
    createStyles({
        container: {
            height: '100%',
            padding: '24px',
            [theme.breakpoints.down('xs')]: {
                height: 'unset'
            }
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
                        <PrivateRoute path='/insurance' exact component={Insurance}/>
                        <PublicRoute path='/' exact component={SignUp}/>
                    </AuthProvider>
                </Switch>
            </Router>
        </Container>
    );
}

export default App;
