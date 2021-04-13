import React, {useReducer} from "react";
import reducer from './reducer';
import {AuthContext} from './context';

const initialState = {
    name: null
}

const AuthProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <AuthContext.Provider value={{state, dispatch}}>
            {children}
        </AuthContext.Provider>
    )
};

export default AuthProvider;
