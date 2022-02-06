import React, { createContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { auth } from '../firebase';

export const authContext = createContext();

const AuthContextProvider = ({children}) => {

    const [loading, setLoading] = useState(true);
    const [userDetails, setUserDetails] = useState(false);
    const history = useHistory();

    useEffect(() => {
        auth.onAuthStateChanged(user => {
            setUserDetails(user);
            setLoading(false);
            if(user) history.push("/Chats")
        })
    }, [userDetails, history])

    return (
        <authContext.Provider value={userDetails}>
            {!loading && children}
        </authContext.Provider>
    );
};

export default AuthContextProvider;