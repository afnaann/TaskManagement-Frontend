import { createContext, useContext, useEffect, useState } from "react";
import useAxios from "../api/useAxios";
import { AuthContext } from "./AuthContext";



const ApiContext = createContext()


export const ApiProvider = ({children}) => {
    const {authTokens} = useContext(AuthContext)
    const [tasks, setTasks ] = useState(null)
    const [totalTasks, setTotalTasks] = useState(null)
    const [totalUserTasks,setTotalUserTasks] = useState(null)
    const [users, setUsers] = useState(null)
    const api = useAxios()


    const getTasks = async () => {
        const response = await api.get('/auth/tasks/home')
        setTasks(response.data)
    }
    const getUsers = async () => {
        const response = await api.get('/auth/admin/getusers')
        console.log(response)
        setUsers(response.data)
    }
    const getTotalTasks = async () => {
        const response = await api.get('/auth/tasks/home')
        setTotalTasks(response.data)
    }
    const getAllUserTasks = async () => {
        const response = await api.get('/auth/admin/alltasks')
        setTotalUserTasks(response.data)
    }

    useEffect(()=> {
        if(!authTokens) return;
        getTasks()

    },[authTokens])
    
    useEffect(()=> {
        if(!authTokens) return;
        getUsers()
        getTotalTasks()
        getAllUserTasks()

    },[])

    return (
        <ApiContext.Provider value={{
            api,
            tasks,
            users,
            totalTasks,
            totalUserTasks
        }}>
            {children}
        </ApiContext.Provider>
    )
}

export default ApiContext