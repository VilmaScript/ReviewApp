
import { Navigate } from "react-router-dom";
import { useGetUser } from "../hooks/useGetUser";

function ProtectedRoutes ({ children }) {
    const { data } = useGetUser();

    // Destructure the user object from data once it's available
    const { user } = data || {};

    // If user data is not available, you can handle it appropriately
    if (!user?.role === 'authenicated') {
        return <Navigate to="/sign-in" />;
    }

    // Now you can use the user object in your component
    console.log(user);

    return children;
}

export default ProtectedRoutes;

