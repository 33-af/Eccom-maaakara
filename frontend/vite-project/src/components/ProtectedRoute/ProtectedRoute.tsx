import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectIsAuthenticated } from "../../redux/slices/adminSlice";
import { Path } from "../../Path";


const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
    const isAuthenticated = useSelector(selectIsAuthenticated);

    if (!isAuthenticated) {
        return <Navigate to={Path.home} replace />; // Перенаправляем на страницу входа
    }

    return children;
};

export default ProtectedRoute;