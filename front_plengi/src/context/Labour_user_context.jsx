import { createContext, useContext, useState } from "react";
import { 
    getLaboursRequest,
    getLabourRequest,
    createLabourRequest,
    deleteLabourRequest,
    updateLabourRequest,

 } from "../api/labour_user";

const LabourContext = createContext()

export const useLabour = () => {
    const context = useContext(LabourContext)

    if (!context) {
        throw new Error("useAuth debe estar dentro de AuthProvider")
    }

    return context;
}

// eslint-disable-next-line react/prop-types
export function LabourProvider({ children }){

    const [ labours, setLabours ] = useState([])

    //obtner todos
    const getLabours = async() => {
        try {
            const res = await getLaboursRequest()
            console.log(res);
            setLabours(res.data)
        } catch (error) {
            console.log(error);
        }
    }

    //create
    const createLabour = async (labour) => {
        const cantidadNumerica = parseFloat(labour.val_unitario);
        const newLabour = { ...labour, val_unitario: cantidadNumerica };
    
        const res = await createLabourRequest(newLabour);
        console.log(res);
      };

    //elimina una tarea
    const deleteLabour = async (id) => {
        try {
            const res = await deleteLabourRequest(id)
            if (res.status === 204) setLabours(labours.filter(labour => labour._id !== id))
        } catch (error) {
            console.log(error);
        }

    };

    //llamar una sola tarea
    const getLabour = async (id) => {
        try {
            const res = await getLabourRequest(id);
            return res.data;
        } catch (error) {
            console.log(error);
        }
    };

    //actualiza una tarea
    const updateLabour = async (id, labour) => {
        try {
            await updateLabourRequest(id, labour)
        } catch (error) {
            console.log(error);
        }

    };
      
    return(
        <LabourContext.Provider 
            value={{
                labours,
                getLabours,
                getLabour,
                createLabour,
                deleteLabour,
                updateLabour,
            }}
        >
            {children}
        </LabourContext.Provider>
    )
}