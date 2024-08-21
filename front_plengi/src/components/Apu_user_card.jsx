/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

function Apu_user_card( {apu} ) {

    return (
        <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md ">
            <header className="flex justify-between">
                <h1 className="text-2xl font-bold">{apu.name_apu}</h1>
            </header>
            <Link to={`/apu/${apu._id}`}
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
            >+</Link>
            {/*<p className="text-slate-300">{apu.cantidad}</p> */}
        </div>
    )
}

export default Apu_user_card