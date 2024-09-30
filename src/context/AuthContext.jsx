import {  createContext, useEffect, useState } from "react";
import {jwtDecode} from 'jwt-decode'
import axios from "axios";

export const AuthContext = createContext()


export const AuthProvider = ({children, navigate}) => {
    const [authTokens, setAuthTokens] = useState(()=> localStorage.getItem('authTokens')? JSON.parse(localStorage.getItem('authTokens')): null)
    const [user, setUser] = useState(()=> localStorage.getItem('authTokens')? jwtDecode(localStorage.getItem('authTokens')): null)
    const [loading, setLoading] = useState(true)
    
    const logoutUser = () => {
        setAuthTokens(null)
        setUser(null)
        localStorage.removeItem('authTokens')
        navigate('/login')
    }

    useEffect(()=> {
        if(authTokens) {
            setUser(jwtDecode(authTokens.access))
        }
        setLoading(false)
    },[authTokens])



    let context = {
        authTokens:authTokens,
        setAuthTokens:setAuthTokens,
        user:user,
        setUser:setUser,
        logoutUser: logoutUser,

    }

    return (
        <AuthContext.Provider value={context}>
            {loading? null : children}
        </AuthContext.Provider>
    )

}