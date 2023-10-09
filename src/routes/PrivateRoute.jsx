import { useContext } from "react";
import { AuthContext } from "../providers/AuthProviders";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    // Show a loading spinner while authentication state is being determined.
    return <span className="loading loading-spinner loading-lg"></span>;
  }

  if (user) {
    // User is authenticated, so render the protected content.
    return children;
  }

  // User is not authenticated, redirect to the login page.
  return <Navigate to="/login" />;
};

export default PrivateRoute;
