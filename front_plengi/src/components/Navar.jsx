//import React from 'react'

import { Link } from "react-router-dom"
import { useAuth } from "../context/AuthContext"

function Navar() {

    const { isAuthenticated, logout, user } = useAuth()

    return (
        <nav className="bd-zinc-700 my-3 flex justify-between 
    py-5 px-10 rounded-lg">
            <Link to={
                isAuthenticated ? "/tasks" : "/"
            }>
                <h1 className="text-2xl font-bold">Plengi</h1>
            </Link>
            <ul className="flex gap-x-2">
                {isAuthenticated ? (
                    <>
                        <li>
                            Bienvenido {user.username}
                        </li>
                        <li><Link to='/add-task'
                            className="bg-indigo-500 px-4 py-1 rounded-sm"
                        >Agrega una tarea</Link></li>

                        <li><Link to='/add-activity'
                            className="bg-indigo-500 px-4 py-1 rounded-sm"
                        >Agrega una actividad</Link></li>

                        <li><Link to='/add-material'
                            className="bg-indigo-500 px-4 py-1 rounded-sm"
                        >Agrega un material</Link></li>

                        <li><Link to='/add-equipo'
                            className="bg-indigo-500 px-4 py-1 rounded-sm"
                        >Agrega un equipo</Link></li>

                        <li><Link to='/add-labour'
                            className="bg-indigo-500 px-4 py-1 rounded-sm"
                        >Agrega la mano de obra</Link></li>

                        <li><Link to='/' onClick={() => {
                            logout()
                        }}>Cerrar sesión</Link></li>
                    </>
                ) : (
                    <>
                        <li>
                            <Link to='/login'
                                className="bg-indigo-500 px-4 py-1 rounded-sm"
                            >Iniciar sesión</Link>
                        </li>
                        <li>
                            <Link to='/register'
                                className="bg-indigo-500 px-4 py-1 rounded-sm"
                            >Registro</Link>
                        </li>
                    </>
                )}
            </ul>
        </nav>
    )
}

export default Navar