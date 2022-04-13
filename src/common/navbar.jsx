import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export function Navbar() {

    const [user, setUser] = useState({name: ""})

    useEffect(() => {
        setUser(JSON.parse(localStorage.getItem("loggedUser")) || {})
    }, [])


    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">Matriz RACI</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to='/usuarios' className="nav-link active" aria-current="page" href="#">Usuários</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/atividades' className="nav-link" href="#">Atividades</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/notificacoes' className="nav-link">Notificações</Link>
                            </li>
                        </ul>
                    </div>
                    <a className="nav-item me-3" href="/">{
                        user.name ? user.name : ""
                    }</a>
                </div>
            </nav>
        </>
    )
}