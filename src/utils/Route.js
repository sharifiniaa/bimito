import React from 'react';
import {Route} from 'react-router-dom';
import Layout from '../components/layout'


const LayoutHoc = (props) => {
    const {component: Component, ...rest} = props;
    return (
        <Layout>
                <Component {...rest} />
        </Layout>
    )
}

const RouteHoc = ({component: Component, type, ...rest}) => {
    return (
        <Route
            {...rest}
            render={matchProps => <LayoutHoc {...matchProps} component={Component}/>}
        />
    )
}
export default RouteHoc;
