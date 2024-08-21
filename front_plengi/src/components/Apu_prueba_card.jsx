/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import { useApu } from "../context/Apu_user_context";

function ApuPruebaCard({ apu, createMaterial }) {

    const { deleteApu } = useApu()

    const handleAddMaterialClick = () => {
        createMaterial(apu);
    };

    return (
        <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md">
            <header className="flex justify-between">
                <h1 className="text-2xl font-bold">{apu.name}</h1>
                <div className="flex gap-x-2 items-center">
                    <button
                        className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md"
                        onClick={() => {
                            deleteApu(apu._id);
                        }}>Eliminar</button>
                    <Link to={`/apu/${apu._id}`}
                        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
                    >Editar</Link>
                    <button
                        className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md"
                        onClick={handleAddMaterialClick}
                    >
                        Agregar a material_user
                    </button>
                </div>
            </header>
            <div>
                <h2 className="text-lg font-bold">Materiales:</h2>
                {apu.material.map((material) => (
                    <div key={material.id}>
                        <p>{material.material}</p>
                        {/* Aquí puedes mostrar los campos adicionales del material si es necesario */}
                    </div>
                ))}
            </div>

            <div>
                <h2 className="text-lg font-bold">Equipo:</h2>
                {apu.equipo.map((equipo) => (
                    <div key={equipo.id}>
                        <p>{equipo.equipo}</p>
                        {/* Aquí puedes mostrar los campos adicionales del equipo si es necesario */}
                    </div>
                ))}
            </div>

            <div>
                <h2 className="text-lg font-bold">Mano de obra:</h2>
                {apu.labour.map((labour) => (
                    <div key={labour.id}>
                        <p>{labour.labour}</p>
                        {/* Aquí puedes mostrar los campos adicionales de la mano de obra si es necesario */}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ApuPruebaCard