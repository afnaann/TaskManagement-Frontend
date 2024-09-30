import { useContext } from "react"
import { AuthContext } from "../context/AuthContext"
import axios from "axios"
import  {jwtDecode}  from "jwt-decode"
import dayjs from "dayjs"


let baseURL = 'http://127.0.0.1:8000';


const useAxios = () => {
    const {authTokens, setUser, setAuthTokens} = useContext(AuthContext)

    const authAxios = axios.create({
        baseURL,
        headers:{Authorization: `Bearer ${authTokens?.access}`}
    })

    authAxios.interceptors.request.use(async (req)=> {
        const user = jwtDecode(authTokens?.access)
        const isExpired = dayjs.unix(user.exp).diff(dayjs()) < 1
        console.log('checking if it is expired.')
        if(!isExpired) return req

        const response = await axios.post(`${baseURL}/auth/api/login/refresh`,{
            refresh:authTokens?.refresh
        });
        console.log('Yes it is. Now updatign the link')
        console.log(response)
        localStorage.setItem('authTokens',JSON.stringify(response.data))
        setAuthTokens(response.data)
        setUser(jwtDecode(response.data.access))

        req.headers.Authorization = `Bearer ${response.data.access}`
        return req
    })
    return authAxios

}

export default useAxios