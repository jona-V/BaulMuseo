/*import { Navigate, Outlet } from "react-router-dom"
import { useAuth } from "../context/authContext"

function Fav({ id }) {
    const { loading, isAuthenticated, favs, addfav } = useAuth();

    const isFaved = favs.some(favId => favId === id);

    const handleClick = () => {
        if (!loading && !isAuthenticated)
            return alert("Necesitas Iniciar Sesión para Agregar Favoritos");

        addfav({ id });
    }

    const [label, emoji] = isFaved
        ? ["Remove Gif from favorites", "X"]
        : ["Add Gif to favorites", "♡"];

    return (
        <>
            <button className="fav" onClick={handleClick}>
                <span aria-label={label} role="img">
                    {emoji}
                </span>
            </button>
            
        </>
    )
}

export default Fav;*/