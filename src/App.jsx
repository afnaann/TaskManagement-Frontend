import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import "./App.css";
import Login from "./Pages/login";
import Register from "./Pages/register";
import AdminHome from "./Pages/admin/adminHome";
import UserHome from "./Pages/user/userHome";
import TaskTable from "./Pages/admin/tasks";
import AddTaskForm from "./Pages/admin/addTask";
import Tasks from "./Pages/user/tasks";
import TaskSubmit from "./Pages/user/tasksubmit";
import PrivateRoute, { LoginRoute } from "./utils/privateRoute";
import { AuthProvider } from "./context/AuthContext";
import ApiContext, { ApiProvider } from "./context/ApiContext";
import AssignTaskForm from "./Pages/admin/assignTask";

function App() {
  const navigate = useNavigate();
  return (
    <AuthProvider navigate={navigate}>
      <ApiProvider>
        <Routes>
          <Route
            path="/login"
            element={
              <LoginRoute>
                <Login />
              </LoginRoute>
            }
          />
          <Route path="/register" element={<Register />} />

          <Route
            path="/home"
            element={
              <PrivateRoute>
                <UserHome />
              </PrivateRoute>
            }
          />
          <Route
            path="/tasks"
            element={
              <PrivateRoute>
                <Tasks />
              </PrivateRoute>
            }
          />
          <Route
            path="/tasksubmit"
            element={
              <PrivateRoute>
                <TaskSubmit />
              </PrivateRoute>
            }
          />

          <Route
            path="/admin/home"
            element={
              <PrivateRoute>
                <AdminHome />
              </PrivateRoute>
            }
          />
          <Route
            path="/admin/tasks"
            element={
              <PrivateRoute>
                <TaskTable />
              </PrivateRoute>
            }
          />
          <Route
            path="/admin/addtask"
            element={
              <PrivateRoute>
                <AddTaskForm />
              </PrivateRoute>
            }
          />
          <Route
            path="/admin/assigntask"
            element={
              <PrivateRoute>
                <AssignTaskForm />
              </PrivateRoute>
            }
          />
        </Routes>
      </ApiProvider>
    </AuthProvider>
  );
}

export default App;
