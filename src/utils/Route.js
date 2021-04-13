import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import Layout from '../components/layout'
import {useAuthContext} from "../context/context";


const LayoutHoc = (props) => {
    const {component: Component, ...rest} = props;
    return (
        <Layout>
            <Component {...rest} />
        </Layout>
    )
}

const PublicRoute = ({component: Component, type, ...rest}) => {
    return (
        <Route
            {...rest}
            render={matchProps => <LayoutHoc {...matchProps} component={Component}/>}
        />
    )
}

const PrivateRoute = ({component: Component, type, ...rest}) => {
    const {state} = useAuthContext();

    if (state.user.name) {
        return (
            <Route
                {...rest}
                render={matchProps => <LayoutHoc {...matchProps} component={Component}/>}
            />
        )
    } else {
        return <Redirect to='/'/>
    }
}

export {PublicRoute, PrivateRoute}


