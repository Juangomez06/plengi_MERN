/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import { useEquipo } from "../context/Equipo_user_context";

function EquipoCard( {equipo} ) {

    const { deleteEquipo } = useEquipo()

    return (
        <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md">
            <header className="flex justify-between">
                <h1 className="text-2xl font-bold">{equipo.equipo}</h1>
                <div className="flex gap-x-2 items-center">
                    <button 
                    className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md"
                    onClick={() => {
                        deleteEquipo(equipo._id);
                    }}>Eliminar</button>
                    <Link to={`/equipo/${equipo._id}`}
                        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
                    >Editar</Link>
                </div>
            </header>
            <p className="text-slate-300">{equipo.unidad}</p>
            <p className="text-slate-300">{equipo.val_unitario}</p>
        </div>
    )
}

export default EquipoCard