import { NavLink, useNavigate } from "react-router-dom";
import { useContext } from "react";
import UserContext from "../context/User.context";
import logo from "../assets/Logo.png";
import mx from "../assets/MxFlag.png";

function NavBar() {
  
  const { user, logout } = useContext(UserContext);
  const navigate = useNavigate();

  const DoLogout = () => {
    logout();
    navigate("/login", {
      replace: true,
    });
  };

  let publicNav = () => {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img src={logo} className="logo" alt="Logo" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav header-left-side">
              <NavLink to="/home">Inicio</NavLink>
              <NavLink to="/catalog">Catálogo</NavLink>
              <NavLink to="/About">Acerca De</NavLink>
            </div>
            <div className="navbar-nav header-right-side">
              <a className="nav-link" href="#">
                {" "}
                <img src={mx} className="flags" alt="flags" />{" "}
              </a>
              <NavLink to="/Signup">Regístrate</NavLink>
              <NavLink to="/login">Iniciar sesión</NavLink>
            </div>
          </div>
        </div>
      </nav>
    );
  };
  let privateNav = () => {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img src={logo} className="logo" alt="Logo" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav header-left-side">
              <NavLink to="/home">Inicio</NavLink>
              <NavLink to="/catalog">Catálogo</NavLink>
              <NavLink to="/About">Acerca De</NavLink>
            </div>
            <div className="navbar-nav header-right-side">
              <a className="nav-link" href="#">
                {" "}
                <img src={mx} className="flags" alt="flags" />{" "}
              </a>
              <NavLink to="/checkout">Carrito</NavLink>
              <NavLink to="/profile">Mi perfil</NavLink>
              <button className='btn btn-light btn-sm ms-2' onClick={DoLogout} >Logout</button>
            </div>
          </div>
        </div>
      </nav>
    );
  };
  return <>{user?.id ? privateNav() : publicNav()}</>;
}

export default NavBar;
