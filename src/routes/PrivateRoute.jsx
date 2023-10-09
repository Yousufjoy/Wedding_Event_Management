import { useContext } from "react";
import { AuthContext } from "../providers/AuthProviders";
import { Link } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user } = useContext(AuthContext);

  if (user) {
    return children;
  }

  return <Link to="/login"></Link>;
};

export default PrivateRoute;
