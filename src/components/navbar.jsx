import logo from '../assets/Logo.png';
import mx from '../assets/MxFlag.png';

function NavBar() {
    return ( 
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <div className="container">                
            <a className="navbar-brand" href="#">
                <img src={logo} className="logo" alt="Logo" />
            </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse .d-flex justify-content-end" id="navbarNavAltMarkup">
            <div className="navbar-nav me-auto ">
            <a className="nav-link active " aria-current="page" href="#">Inicio</a>
            <a className="nav-link " aria-current="page" href="#">Compra un auto</a>
            <a className="nav-link " href="#">Nosotros</a>
            </div>
            <div className="navbar-nav">
              <a className="nav-link" href="#"> <img src={mx} className="flags" alt="flags" /> </a>
              <button type="button" className="btn btn-secondary">Acceso</button>
            </div>
          </div>
        </div>
      </nav>
     );
}

export default NavBar;