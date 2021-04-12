import React, {createContext} from 'react';


export const AuthContext = createContext({});

const useAuthContext = () => {
    const context = React.useContext(AuthContext);
    if (context === null) {
        console.error('use Context within provider block', context)
    }
    return context;
}

export {useAuthContext};
