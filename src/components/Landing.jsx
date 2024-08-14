import React from "react";
import Car1 from "../assets/img/Banner.png";
import Card1 from "../assets/img/Card1.webp";
import Card2 from "../assets/img/Card2.webp";
import Card3 from "../assets/img/Card3.webp";
import Benefits1 from "../assets/img/Benefits1.webp";
import Plan1 from "../assets/img/Plan.png";
import Serv1 from "../assets/img/Servicios.png";
import toast, { Toaster } from 'react-hot-toast';
import { NavLink, useNavigate } from "react-router-dom";

const notify = () => toast('En construcción...');

const Landing = () => {
  const bannerSize = {
    objectFit: "fill",
    width: "60%",
    height: "50%",
  };
  const planCardSize = {
    objectFit: "cover",
    width: "100%",
    height: "100%",
  };

  return (
    <>
      <div className="container topContainer">
        <div className="row">
          <div className="col-md-4 mt-5 mb-5">
            <h1 className="display-5 text-center">
              Compra y venta de autos seminuevos
            </h1>
            <p className="h5 text-center mt-4">¡Cotiza tu auto hoy!</p>
            <div className="d-grid gap-2">
              <NavLink to="/products" className="btn btn-primary btn-lg mt-4 mb-2">Comprar un auto</NavLink>
            </div>
          </div>
          <div className="col-md-8 m-auto text-center">
            <img
              src={Car1}
              id="banner"
              alt="Car"
              className="img-fluid "
              style={bannerSize}
            />
          </div>
        </div>
        <div className="row">
          <h1 className="text-center display-4 mt-5 mb-5">
            Razones para ser cliente de Kavakito
          </h1>
          <div className="col-md-4">
            <div className="card mb-4 h-100">
              <img src={Card1} alt="" className="card-img-top" />
              <div className="card-body">
                <div className="card-title">
                  <h3>Pruébalo por 7 días o hasta 500 km </h3>
                </div>
                <div className="card-text ">
                  <small className="text-muted">
                    No te convence? No te preocupes, cámbialo por otro auto.
                  </small>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card mb-4 h-100">
              <img src={Card2} alt="" className="card-img-top" />
              <div className="card-body">
                <div className="card-title">
                  <h3>Certificamos todos nuestros autos</h3>
                </div>
                <div className="card-text ">
                  <small className="text-muted">
                    Revisamos mecánica, estética, y documentación, para que te
                    sientas seguro en Kavak.
                  </small>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card mb-4 h-100">
              <img src={Card3} alt="" className="card-img-top" />
              <div className="card-body">
                <div className="card-title">
                  <h3>Ofrecemos planes de pago a medida</h3>
                </div>
                <div className="card-text ">
                  <small className="text-muted">
                    Preaprobamos tu plan de pagos en menos de 2 minutos.
                  </small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid mt-5">
        <div id="sectionBeneficios" className="row align-items-center text-light">
          <div className="col-6 p-5">
            <h2 className="display-4 fw-bold">Cambia tu auto con más beneficios</h2>
            <ul className="list-unstyled fs-5 benefitsList mt-5">
              <li> Te damos un bono extra</li>
              <li>Plan de pagos preaprobado</li>
              <li>No te quedes sin tu auto, los intercambiamos en menos de 2 horas</li>
            </ul>
            
            <div className="d-grid gap-2">
                <button
                    type="button"
                    className="btn btn-lg btn-light  mt-4 mb-2"
                    onClick={notify}
                >   
                    Vende tu auto
                </button>
                </div>
          </div>
          <div className="col-6">
            <img src={Benefits1} alt="" className="img-fluid" />
          </div>
          
        </div>
      </div>
      <div className="container-fluid mt-5">
        <div id="sectionPlan" className="row align-items-center text-dark">
          <div className="col-6">
            <img src={Plan1} alt="" className="img-fluid img-plan1" style={planCardSize}/>
          </div>
          <div className="col-6 p-5">
            <h2 className="display-4 fw-bold">Aprobamos tu plan de pagos en 2 minutos </h2>
            <ul className="list-unstyled fs-5 benefitsList mt-5">
              <li>Tenemos planes personalizados para todos los perfiles.</li>
            </ul>
            
            <div className="d-grid gap-2">
                <button
                    type="button"
                    className="btn btn-dark btn-lg mt-4 mb-2"
                    onClick={notify}
                >   
                   Comprar un auto a meses
                </button>
                </div>
          </div>
          
        </div>
      </div>
      <div className="container-fluid mt-5">
        <div id="sectionBeneficios" className="row align-items-center text-light">
          <div className="col-6 p-5">
            <h2 className="display-5 fw-bold">Disfruta tu auto, nosotros lo cuidamos</h2>
            <ul className="list-unstyled fs-5 benefitsList mt-5">
              <li>Damos servicios a cualquier auto: mantenimiento, verificación y más</li>
            </ul>
            
            <div className="d-grid gap-2">
                <button
                    type="button"
                    className="btn btn-lg btn-light  mt-4 mb-2"
                    onClick={notify}
                >   
                    Conoce los servicios
                </button>
                </div>
          </div>
          <div className="col-6">
            <img src={Serv1} alt="" className="img-fluid" style={planCardSize}/>
          </div>
          
        </div>
      </div>
    </>
  );
};

export default Landing;
