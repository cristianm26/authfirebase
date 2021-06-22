import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import { auth } from '../Firebase/firebaseConfig'

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [msgerror, setMsgerror] = useState(null);
    const history = useHistory();
    const registrarUsuario = (e) => {
        e.preventDefault();

        auth.createUserWithEmailAndPassword(email, password)
            .then(res => {
                history.push('/')
            })
            .catch(e => {

                if (e.code === 'auth/invalid-email') {
                    setMsgerror('Formato Email Incorrecto')
                }
                if (e.code === 'auth/weak-password') {
                    setMsgerror('La contraseña debe tener 6 caracteres o mas')
                }
            })
    }

    const loginUsuario = () => {
        auth.signInWithEmailAndPassword(email, password)
            .then((res) => history.push('/'))
            .catch(error => {
                if (error.code === 'auth/wrong-password') {
                    setMsgerror('Password Incorrecto')
                }
            })
    }
    return (
        <div className="row mt-5">
            <div className="col">

            </div>
            <div className="col">
                <form className="form-group" onSubmit={registrarUsuario}>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Correo Electrónico</label>
                        <input onChange={(e) => setEmail(e.target.value)} type="email" name="email" value={email} className="form-control" placeholder="Introduce tu Correo" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" onChange={(e) => setPassword(e.target.value)} className="form-control" name="password" value={password} placeholder="Introduce tu Contraseña" id="exampleInputPassword1" />
                    </div>

                    <button type="submit" className="btn btn-primary btn-block mt-2">Registrar</button>
                </form>
                <button className="btn btn-info  mt-2" onClick={loginUsuario} >
                    Iniciar Sesión
                </button>
                {
                    msgerror !== null ?
                        (<div className="alert alert-danger">
                            {msgerror}
                        </div>)
                        :
                        (
                            <span></span>
                        )
                }
            </div>
            <div className="col">

            </div>
        </div >
    )
}

export default Login
