
import { createContext, useContext, useState } from "react";
import { 
    getEquiposRequest,
    getEquipoRequest,
    createEquipoRequest,
    deleteEquipoRequest,
    updateEquipoRequest,

 } from "../api/equipo_user";

const EquipoContext = createContext()

export const useEquipo = () => {
    const context = useContext(EquipoContext)

    if (!context) {
        throw new Error("useAuth debe estar dentro de AuthProvider")
    }

    return context;
}

// eslint-disable-next-line react/prop-types
export function EquipoProvider({ children }){

    const [ equipos, setEquipos ] = useState([])

    //obtner todos
    const getEquipos = async() => {
        try {
            const res = await getEquiposRequest()
            setEquipos(res.data)
        } catch (error) {
            console.log(error);
        }
    }

    //create
    const createEquipo = async (equipo) => {
        const cantidadNumerica = parseFloat(equipo.val_unitario);
        const newEquipo = { ...equipo, val_unitario: cantidadNumerica };
    
        const res = await createEquipoRequest(newEquipo);
        console.log(res);
      };

    //elimina una tarea
    const deleteEquipo = async (id) => {
        try {
            const res = await deleteEquipoRequest(id)
            if (res.status === 204) setEquipos(equipos.filter(equipo => equipo._id !== id))
        } catch (error) {
            console.log(error);
        }

    };

    //llamar una sola tarea
    const getEquipo = async (id) => {
        try {
            const res = await getEquipoRequest(id);
            return res.data;
        } catch (error) {
            console.log(error);
        }
    };

    //actualiza una tarea
    const updateEquipo = async (id, equipo) => {
        try {
            await updateEquipoRequest(id, equipo)
        } catch (error) {
            console.log(error);
        }

    };
      
    return(
        <EquipoContext.Provider 
            value={{
                equipos,
                getEquipos,
                getEquipo,
                createEquipo,
                deleteEquipo,
                updateEquipo,
            }}
        >
            {children}
        </EquipoContext.Provider>
    )
}