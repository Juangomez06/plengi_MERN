
import { createContext, useContext, useState } from "react";
import { 
    getMaterialsRequest,
    getMaterialRequest,
    createMaterialRequest,
    deleteMaterialRequest,
    updateMaterialRequest,

 } from "../api/material_user";

const MaterialContext = createContext()

export const useMaterial = () => {
    const context = useContext(MaterialContext)

    if (!context) {
        throw new Error("useAuth debe estar dentro de AuthProvider")
    }

    return context;
}

// eslint-disable-next-line react/prop-types
export function MaterialProvider({ children }){

    const [ materials, setMaterials ] = useState([])

    //obtner todos
    const getMaterials = async() => {
        try {
            const res = await getMaterialsRequest()
            setMaterials(res.data)
        } catch (error) {
            console.log(error);
        }
    }

    //create
    const createMaterial = async (material) => {
        const cantidadNumerica = parseFloat(material.val_unitario);
        const newMaterial = { ...material, val_unitario: cantidadNumerica };
    
        const res = await createMaterialRequest(newMaterial);
        console.log(res);
      };

    //elimina una tarea
    const deleteMaterial = async (id) => {
        try {
            const res = await deleteMaterialRequest(id)
            if (res.status === 204) setMaterials(materials.filter(material => material._id !== id))
        } catch (error) {
            console.log(error);
        }

    };

    //llamar una sola tarea
    const getMaterial = async (id) => {
        try {
            const res = await getMaterialRequest(id);
            return res.data;
        } catch (error) {
            console.log(error);
        }
    };

    //actualiza una tarea
    const updateMaterial = async (id, material) => {
        try {
            await updateMaterialRequest(id, material)
        } catch (error) {
            console.log(error);
        }

    };
      
    return(
        <MaterialContext.Provider 
            value={{
                materials,
                getMaterials,
                getMaterial,
                createMaterial,
                deleteMaterial,
                updateMaterial,
            }}
        >
            {children}
        </MaterialContext.Provider>
    )
}