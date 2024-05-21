import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";


function ProtectedRoutes({ children }) {

  const { user, authLoading } = useAuth();

  if (!user && !authLoading) {
    return <Navigate to="/sign-in" />;
  }

  return children;
};

export default ProtectedRoutes;

