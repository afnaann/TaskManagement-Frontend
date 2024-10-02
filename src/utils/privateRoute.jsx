import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
// import  jwtDecode  from "jwt-decode"; 
// import {jwt} from "jsonwebtoken"
const PrivateRoute = ({ children }) => {
  const { authTokens } = useContext(AuthContext);

  if (!authTokens) {
    return <Navigate to="/login" />;
  }
  // let userdetails = jwtDecode(authTokens.access);
  // if (userdetails.staff_status == false){
  //   return <Navigate to='/home'/>
  // }

  // if (userdetails.staff_status == true){
  //   return <Navigate to='/admin/home'/>
  // }

  return children;
};

export default PrivateRoute;

export const LoginRoute = ({ children }) => {
  const { authTokens } = useContext(AuthContext);

  // if (authTokens) {
  //   let userdetails = jwtDecode(authTokens.access);
  //   if (userdetails.staff_status == true) {
  //     return <Navigate to="/admin/home" />;
  //   } else {
  //     return <Navigate to="/home" />;
  //   }
  // }

  return children;
};
