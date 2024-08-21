/* eslint-disable react/prop-types */

function BDCard( {bd} ) {

    return (
        <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md">
            <header className="flex justify-between">
                <h1 className="text-2xl font-bold">{bd.name}</h1>
            </header>
            <p className="text-slate-300">{bd.unidad}</p>
            <p className="text-slate-300">{bd.val_unitario}</p>
        </div>
    )
}

export default BDCard