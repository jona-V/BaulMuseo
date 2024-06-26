import { Navigate, Outlet } from "react-router-dom"
import { useAuth } from "./context/authContext"

function ProtectedRoutes() {
    const { loading, isAuthenticated } = useAuth();
    //console.log(loading, isAuthenticated);

    if (loading) return <h1>Cargando...</h1>

    if (!loading && !isAuthenticated)
        return <Navigate to="/login" replace />;
    //alert("Necesitas Iniciar Sesión para ver contenido")

    return <Outlet />;
}

export default ProtectedRoutes;