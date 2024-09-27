import axios from 'axios'
import { jwtDecode } from 'jwt-decode'
import { useNavigate } from 'react-router-dom'

const navigate = useNavigate()


const authAxios = axios.create({
    baseURL: 'http://127.0.0.1:8000/'
})

function isTokenExpired(token){
    if(!token){
        return True
    }
    const decoded = jwtDecode(token)
    const currentTime = Date.now() / 1000
    return decoded.exp < currentTime
}
function logoutUser() {
    localStorage.removeItem('access')
    localStorage.removeItem('refresh')
    navigate('/login')
}
authAxios.interceptors.use(
    async (config) => {
        const accessToken = localStorage.getItem('access')
        const refreshToken = localStorage.getItem('refresh')

        if (!accessToken || !refreshToken) {
            return Promise.reject('No Token Available. User Need to login')
        }
        if (isTokenExpired) {
            try {
                const response = axios.post('http://127.0.0.1:8000/auth/api/login/refresh',{
                    refresh: refreshToken
                })
                const newAccessToken = (await response).data.access
                localStorage.setItem('access',newAccessToken)

                config.headers.Authorization = `Bearer ${newAccessToken}`
            }
            catch(error){
                logoutUser()
                return Promise.reject('Refresh Token Expired Or Invalid',error)
            }
        }else{
            config.headers.Authorization = `Bearer ${accessToken}`
        }
        return confirm
    },
    (error) => {
        return Promise.reject(error)
    }
)


export default authAxios