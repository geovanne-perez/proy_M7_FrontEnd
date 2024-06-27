import React from 'react'
import logo from "../assets/Logo.png"

function Footer() {
  return (
    <>
      <div className="container-fluid text-white bg-dark p-5 small">
        <div className="row">
            <div className="col-3">-
                <img src={logo} alt="" className="img-fluid footerLogo" />
            </div>
            <div className="col-3">
                <ul className="footer-nav-list list-unstyled">
                    <li className="footer-nav-item"><a href="">Compra un auto</a></li>
                    <li className="footer-nav-item"><a href="">Vende tu auto</a></li>
                    <li className="footer-nav-item"><a href="">Sedes</a></li>
                </ul>
            </div>
            <div className="col-3">
                <ul className="footer-nav-list list-unstyled">
                    <li className="footer-nav-item"><a href="">Preguntas frecuentes</a></li>
                    <li className="footer-nav-item"><a href="">Guía de precios</a></li>
                </ul>
            </div>
            <div className="col-3">
                <ul className="footer-nav-list list-unstyled">
                    <li className="footer-nav-item"><a href="">Trabaja con nosotros</a></li>
                    <li className="footer-nav-item"><a href="">Contacto</a></li>
                </ul>
            </div>
        </div>
      </div>
    </>
  )
}

export default Footer
