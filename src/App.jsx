import { useState } from 'react'
import './App.css'
import Login from './Pages/login'
import Register from './Pages/register'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Sidebar from './components/sidebar'
import Home from './Pages/admin/home'
import UserHome from './Pages/user/home'
import TaskTable from './Pages/admin/tasks'
import AddTaskForm from './Pages/admin/addTask'
import Tasks from './Pages/user/tasks'
import TaskSubmit from './Pages/user/tasksubmit'

function App() {
  return (
    <Router>  
      <Routes>
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
        
        <Route path='/home' element={<UserHome/>} />
        <Route path='/tasks' element={<Tasks/>} />
        <Route path='/tasksubmit' element={<TaskSubmit/>} />

        <Route path='/admin/home' element={<Home/>} />
        <Route path='/admin/tasks' element={<TaskTable/>} />
        <Route path='/admin/addtask' element={<AddTaskForm/>} />
      </Routes>
    </Router>
  )
}

export default App
