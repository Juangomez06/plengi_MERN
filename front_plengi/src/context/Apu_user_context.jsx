
import { createContext, useContext, useState } from "react";
import { 
    getApusRequest,
    getApuRequest,
    updateApuRequest,

 } from "../api/apu_user";

const ApuContext = createContext()

export const useApu = () => {
    const context = useContext(ApuContext)

    if (!context) {
        throw new Error("useAuth debe estar dentro de AuthProvider")
    }

    return context;
}

// eslint-disable-next-line react/prop-types
export function ApuProvider({ children }){

    const [ apus, setApus ] = useState([])

    //obtner todos
    const getApus = async() => {
        try {
            const res = await getApusRequest()
            setApus(res.data)
        } catch (error) {
            console.log(error);
        }
    }

    //llamar una sola tarea
    const getApu = async (id) => {
        try {
            const res = await getApuRequest(id);
            return res.data;
        } catch (error) {
            console.log(error);
        }
    };

    //actualiza el apu 
    const updateApu = async (id, apu) => {
        try {
            await updateApuRequest(id, apu)
        } catch (error) {
            console.log(error);
        }
    };
      
    return(
        <ApuContext.Provider 
            value={{
                apus,
                getApus,
                getApu,
                updateApu,
            }}
        >
            {children}
        </ApuContext.Provider>
    )
}