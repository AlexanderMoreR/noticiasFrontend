import React from 'react'
import {Link} from 'react-router-dom'
import { Buscador } from './Buscador'

export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container">
            <Link className="navbar-brand" to="/">Noticias</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarColor01">
                <ul className="navbar-nav me-auto">
                <li className="nav-item">
                    <Link className="nav-link active" to="/">Inicio</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/">Tiempo</Link>
                </li>
                </ul>
                <Buscador></Buscador>
            </div>
            </div>
        </nav>
    )
}
