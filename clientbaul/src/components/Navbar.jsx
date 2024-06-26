import { Link } from "react-router-dom"
import { useAuth } from "../context/authContext"
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Navbar() {
    const { isAuthenticated, logout, user } = useAuth();

    return (
        <div className="header">
            <div className="container-fluid">
                <div className="row d_flex">
                    <div className=" col-md-2 col-sm-3 logo_section logo_section1">

                    </div>
                    <div className="col-lg-12 col-md-10 col-sm-9">
                        <div className=" col-md-2 col-sm-3 logo_section">
                            <div className="full">
                                <div className="center-desk">
                                    <div className="logo">
                                        <Link to="/">
                                            <img src=".\src\docs\BM-logo.png" alt="#" width="70" height="70" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <nav className="navigation navbar navbar-expand-md navbar-dark ">
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                data-bs-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false"
                                aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarsExample04">
                                <ul className="navbar-nav mr-auto">
                                    <li className="nav-item active">
                                        <Link className="nav-link" to="/">Inicio</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/baulMexico">Baúles de México</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/baulMundo">Baúles del Mundo</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/galeria">Galería</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/contacto">Contáctanos</Link>
                                    </li>
                                </ul>
                                <div className="form-inline my-1 my-lg navbar-2">
                                    <div className="login_btn">
                                        <ul className="email text_align_right">
                                            {isAuthenticated ? (
                                                <>
                                                    <Nav className="nav-link nav-link">
                                                        <NavDropdown title={user.username}>
                                                            <NavDropdown.Item className="nav-lank">{user.email}</NavDropdown.Item>
                                                            <NavDropdown.Divider />
                                                            <NavDropdown.Item to="/" onClick={() => {
                                                                logout();
                                                            }}>
                                                                Salir
                                                            </NavDropdown.Item>
                                                        </NavDropdown>
                                                    </Nav>
                                                </>
                                            ) : (
                                                <>
                                                    <div className="navL">
                                                        <li><Link to="/login">Acceder</Link></li>
                                                        <li><Link to="/register">Crear Cuenta</Link></li>
                                                    </div>
                                                </>
                                            )}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar