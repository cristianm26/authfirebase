import React, { useEffect, useState } from 'react'
import { Link, useHistory } from "react-router-dom";
import { auth } from '../Firebase/firebaseConfig';

const Menu = () => {
    const [usuario, setUsuario] = useState(null)
    const history = useHistory();
    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            if (user) {
                setUsuario(user.email)
            }
        })
    }, [])

    const cerrarSesion = () => {
        auth.signOut();
        setUsuario(null)
        history.push('/')
    }

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Inicio</Link>
                    </li>
                    <li className="nav-item">
                        {
                            !usuario ? (<Link className="nav-link" to="/login">Login</Link>)
                                : (<span></span>)
                        }

                    </li>
                    <li className="nav-item">
                        {
                            !usuario ? (<Link className="nav-link" to="/admin">Admin</Link>)
                                : (<span></span>)
                        }
                    </li>
                </ul>
                {
                    usuario ? (<button className="btn btn-danger" onClick={cerrarSesion} >Cerrar Sesión</button>)
                        : (<span></span>)
                }
            </nav>
        </div>
    )
}

export default Menu
