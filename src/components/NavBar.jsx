import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { CarritoContext } from '../context/CarritoContext';
import './navbar.css'

export const NavBar = () => {

    const {listaCompras} = useContext(CarritoContext);

    return (
        <>
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid">
                        <a className="navbar-brand">TIENDA</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <NavLink className="nav-link active" aria-current="page" to=''>INICIO</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to=''>CATÁLOGO</NavLink>
                                </li>
                            </ul>
                            <div>
                                <div className="d-lg-none">
                                    <NavLink to='/carrito-compras'>
                                        <img src="/assets/carrito.svg" alt="carrito" className="carrito" />
                                    </NavLink>
                                </div>
                                <div className="d-none d-lg-inline">
                                    <NavLink to='/carrito-compras'>
                                        <img src="/assets/carrito.svg" alt="carrito" className="carrito" />
                                    </NavLink>
                                    <span id="carrito-counter" className="carrito-counter">{listaCompras.length}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
}
