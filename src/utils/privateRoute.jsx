import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext"; // Use the actual context, not the provider

const PrivateRoute = ({ children }) => {
  const { authTokens } = useContext(AuthContext);

  // If autTokens is not authenticated, redirect to the login page
  if (!authTokens) {
    console.log(authTokens)
    return <Navigate to="/login" />;
  }

  // If authenticated, render the child components
  return children;
};

export default PrivateRoute;
