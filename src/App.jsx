import "./App.css";
import Cuadrado from "./components/cuadrado";
import Circulo from "./components/círculo";
import Rombo from "./components/rombo";
import NavBar from "./components/navbar";

function App() {
  return (
    <>
      <NavBar />
        <div
          style={{ height: "40vh", background: "white" }}
          className="text-center"
        >
          <div className="row">
            <div className="col-md-12 mb-5">
              <h1>Selecciona un color</h1>
              <input type="color" />
            </div>
            
            <div className="col-md-4 d-flex justify-content-center">
                <Cuadrado />
              </div>
              <div className="col-md-4 d-flex justify-content-center">
                <Circulo />
              </div>
              <div className="col-md-4 d-flex justify-content-center">
                <Rombo />
              </div>
          </div>
        </div>
    </>
  );
}

export default App;
