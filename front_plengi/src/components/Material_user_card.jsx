/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import { useMaterial } from "../context/Material_user_context";

function MaterialCard( {material} ) {

    const { deleteMaterial } = useMaterial()

    return (
        <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md">
            <header className="flex justify-between">
                <h1 className="text-2xl font-bold">{material.material}</h1>
                <div className="flex gap-x-2 items-center">
                    <button 
                    className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md"
                    onClick={() => {
                        deleteMaterial(material._id);
                    }}>Eliminar</button>
                    <Link to={`/material/${material._id}`}
                        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
                    >Editar</Link>
                </div>
            </header>
            <p className="text-slate-300">{material.unidad}</p>
            <p className="text-slate-300">{material.val_unitario}</p>
        </div>
    )
}

export default MaterialCard