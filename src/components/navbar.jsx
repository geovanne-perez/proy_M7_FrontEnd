import { NavLink, useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import UserContext from "../context/User.context";
import logo from "../assets/Logo.png";
import mx from "../assets/MxFlag.png";

function NavBar() {

  const { user, logout } = useContext(UserContext);
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => setIsOpen(!isOpen);

  const DoLogout = () => {
    logout();
    navigate("/login", {
      replace: true,
    });
  };

  let publicNav = () => {
    return (
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink to="/login">Iniciar sesión</NavLink>
        </li>
      </ul>
    );
  };
  let privateNav = () => {
    return (
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink to="/checkout">Carrito</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/profile">Mi perfil</NavLink>
        </li>
        <li className="nav-item">
          <button className="btn btn-light btn-sm ms-2" onClick={DoLogout}>
            Log out
          </button>
        </li>
      </ul>
    );
  };

  return (
    <>
    
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img src={logo} className="logo" alt="Logo" onClick={() => navigate("/home")} />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#MyNavBar"
            aria-controls="MyNavBar"
            aria-expanded={isOpen}
            aria-label="Toggle navigation"
            onClick={handleToggle}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className={
              isOpen
                ? "collapse navbar-collapse show"
                : "collapse navbar-collapse"
            }
            id="MyNavBar"
          >
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <NavLink className={"nav-link"} to="/home">Inicio</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={"nav-link"} to="/catalog">Catálogo</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={"nav-link"} to="/About">Acerca De</NavLink>
              </li>
            </ul>
            {user?.id ? privateNav() : publicNav()}
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
