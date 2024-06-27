import AppRouter from "./routes/AppRouter";
import NavBar from "./components/navbar";
import Footer from "./components/footer";
import toast, { Toaster } from 'react-hot-toast';
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min';
import "./App.css";
import "./index.css";

function App() {
  return (
    <>
      <NavBar />
      <AppRouter />
      <Footer/>
      <Toaster />
    </>
  );
}

export default App;
