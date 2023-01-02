import { Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";
const ProtectedRoute = ({ user, children }) => {
  if (!user) {
    return <Navigate to="/" />;
  }

  return children;
};

export default ProtectedRoute;
