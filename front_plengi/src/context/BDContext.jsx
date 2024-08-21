
import { createContext, useContext, useState } from "react";
import {
    getEquipos_BD_Request,
    getEquipo_BD_Request,
    createEquipo_BD_Request,
    getMaterials_BD_Request,
    getMaterial_BD_Request,
    createMaterial_BD_Request,
    getLabours_BD_Request,
    getLabour_BD_Request,
    createLabour_BD_Request,

} from "../api/BD";

const BDContext = createContext()

export const useBD = () => {
    const context = useContext(BDContext)

    if (!context) {
        throw new Error("useAuth debe estar dentro de AuthProvider")
    }

    return context;
}

// eslint-disable-next-line react/prop-types
export function BDProvider({ children }) {

    // eslint-disable-next-line no-unused-vars
    const [bds, setBds] = useState([])
    const [equipos, setEquipos] = useState([]);
    const [labours, setLabours] = useState([]);
    const [materials, setMaterials] = useState([]);

    //equipos

    //obtner todos
    const getEquipos_BD = async () => {
        try {
            const res = await getEquipos_BD_Request()
            setEquipos(res.data)
        } catch (error) {
            console.log(error);
        }
    }

    //llamar una sola tarea
    const getEquipo_BD = async (id) => {
        try {
            const res = await getEquipo_BD_Request(id);
            return res.data;
        } catch (error) {
            console.log(error);
        }
    };

    //create
    const createEquipo_BD = async (equipo) => {
        const cantidadNumerica = parseFloat(equipo.val_unitario);
        const newEquipo = { ...equipo, val_unitario: cantidadNumerica };

        const res = await createEquipo_BD_Request(newEquipo);
        console.log(res);
    };

    //Mano de obra

    //obtner todos
    const getLabours_BD = async () => {
        try {
            const res = await getLabours_BD_Request()
            setLabours(res.data)
        } catch (error) {
            console.log(error);
        }
    }

    //llamar una sola tarea
    const getLabour_BD = async (id) => {
        try {
            const res = await getLabour_BD_Request(id);
            return res.data;
        } catch (error) {
            console.log(error);
        }
    };

    //create
    const createLabour_BD = async (equipo) => {
        const cantidadNumerica = parseFloat(equipo.val_unitario);
        const newEquipo = { ...equipo, val_unitario: cantidadNumerica };

        const res = await createLabour_BD_Request(newEquipo);
        console.log(res);
    };

    //Materiales  

    //obtner todos
    const getMaterials_BD = async () => {
        try {
            const res = await getMaterials_BD_Request()
            setMaterials(res.data)
        } catch (error) {
            console.log(error);
        }
    }

    //llamar una sola tarea
    const getMaterial_BD = async (id) => {
        try {
            const res = await getMaterial_BD_Request(id);
            return res.data;
        } catch (error) {
            console.log(error);
        }
    };

    //create
    const createMaterial_BD = async (equipo) => {
        const cantidadNumerica = parseFloat(equipo.val_unitario);
        const newEquipo = { ...equipo, val_unitario: cantidadNumerica };

        const res = await createMaterial_BD_Request(newEquipo);
        console.log(res);
    };

    return (
        <BDContext.Provider
            value={{
                bds,
                materials,
                equipos,
                labours,
                getEquipos_BD,
                getEquipo_BD,
                createEquipo_BD,
                getMaterials_BD,
                getMaterial_BD,
                createMaterial_BD,
                getLabours_BD,
                getLabour_BD,
                createLabour_BD,
            }}
        >
            {children}
        </BDContext.Provider>
    )
}