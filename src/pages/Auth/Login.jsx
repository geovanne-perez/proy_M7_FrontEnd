import { useState, useContext } from 'react';
import UserContext from '../../context/User.context';
import { NavLink, useNavigate } from 'react-router-dom';
import Signup from '../Auth/Signup';
//import { loginService } from '../../services/Auth.service';

const Login = () => {
    const navigate = useNavigate();

    const { login } = useContext(UserContext);
    const [formulario, setFormulario] = useState({
        username: '',
        password: ''
    });

    const handleInputChange = (event) => {
        setFormulario({
            ...formulario,
            [event.target.name]: event.target.value
        })
    }

    const enviarDatos = (event) => {
        event.preventDefault()
        loginService(formulario)
            .then(response => {
                login(response.data.token);
                navigate("/products");
            })
            .catch((error) => {
                console.log(error)
                alert("Error al iniciar sesión")
            })
    }
    return (
        <div className="container" style={{marginTop:"10rem"}}>
            <form className="form-login" onSubmit={enviarDatos}>
                <h1 className="text-center mb-5">Iniciar Sesión</h1>
                <div className="mb-3">
                    <label htmlFor="username" className="form-label">Username</label>
                    <input type="input" className="form-control form-control-lg" id="username" onChange={handleInputChange} value={formulario.username} name="username" />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label form-label-lg">Password</label>
                    <input type="password" className="form-control form-control-lg" id="password" onChange={handleInputChange} value={formulario.password} name="password" />
                </div>
                <div className="d-grid">
                    <button className="btn btn-primary" type="submit">Login</button>
                </div>
                <div className="d-grid mb-5">
                    <p className='text-center mt-2 '>Aún no eres cliente?</p>
                    <NavLink to="/Signup" className="btn btn-secondary">Regístrate</NavLink>
                </div>
            </form>
        </div>
    );
}

export default Login;