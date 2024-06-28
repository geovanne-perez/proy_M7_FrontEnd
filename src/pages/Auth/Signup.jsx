import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
//import { registerService } from '../../services/Auth.service';

const Signup = () => {
    const navigate = useNavigate();

    const [formulario, setFormulario] = useState({
        name: '',
        last_name: '',
        email: '',
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
        registerService(formulario)
            .then(response => {
                navigate("/login");
            })
            .catch(error => {
            })

    }
    return (
        <div className="container" style={{marginTop:"10rem"}}>
            <form className="form-login mb-5">
            {/* <form className="form-login" onSubmit={enviarDatos}> */}
                <h1 className="text-center mb-5">Crear cuenta</h1>
                <div className="row">
                    <div className="col-6 mb-3">
                        <label htmlFor="username" className="form-label">Username</label>
                        <input type="text" className="form-control form-control-lg" id="username" onChange={handleInputChange} value={formulario.username} name="username" />
                    </div>
                    <div className="col-6 mb-3">
                        <label htmlFor="password" className="form-label form-label-lg">Contraseña</label>
                        <input type="password" className="form-control form-control-lg" id="password" onChange={handleInputChange} value={formulario.password} name="password" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-6 mb-3">
                        <label htmlFor="name" className="form-label">Nombre</label>
                        <input type="text" className="form-control form-control-lg" id="name" onChange={handleInputChange} value={formulario.name} name="name" />
                    </div>
                    <div className="col-6 mb-3">
                        <label htmlFor="last_name" className="form-label">Apellido</label>
                        <input type="text" className="form-control form-control-lg" id="last_name" onChange={handleInputChange} value={formulario.last_name} name="last_name" />
                    </div>
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" className="form-control form-control-lg" id="email" onChange={handleInputChange} value={formulario.email} name="email" />
                </div>
                <div className="d-grid">
                    <button className="btn btn-success" type="submit">
                        Enviar
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Signup;