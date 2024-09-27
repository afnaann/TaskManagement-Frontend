import {  createContext, useEffect, useState } from "react";
import {jwtDecode} from 'jwt-decode'
import axios from "axios";


const AuthContext = createContext()

export const AuthProvider = ({children}) => {
    const [authTokens, setAuthTokens] = useState(()=> localStorage.getItem('authTokens')? JSON.parse(localStorage.getItem('authToken')): '')
    const [user, setUser] = useState(()=> localStorage.getItem('authTokens')? jwtDecode(localStorage.getItem('authToken')): '')
    // const [loading, setLoading] = useState(true)

    useEffect(()=> {
        if(authTokens) {
            const interval = setInterval(()=> {
                refreshToken();
            },4 * 60 * 1000)

            return ()=> clearInterval(interval)
        }
    },[authTokens])

    useEffect(()=> {
        if(authTokens) {
            setUser(jwtDecode(authTokens.access))
        }
    },[])


    const refreshToken = async () => {
        try{
            const response = await axios.post('http://127.0.0.1:8000/auth/api/login/refresh',{
                refresh: authTokens?.refresh
            })
            const newTokens = response.data
            setAuthTokens(newTokens)
            setUser(jwtDecode(newTokens.access))
            localStorage.setItem('authTokens',newTokens)
        } catch(error){
            console.error('Something Went Wrong.',error)
            logoutUser();
        }
    }
    const logoutUser = () => {
        setAuthTokens('')
        setUser('')
        localStorage.removeItem('authTokens')
    }


    return (
        <AuthContext.Provider value={{
            refreshToken,
            logoutUser,
        }}>
            {children}
        </AuthContext.Provider>
    )

}