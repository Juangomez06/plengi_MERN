
import { createContext, useContext, useState } from "react";
import { 
    getActivitysRequest,
    getActivityRequest,
    createActivityRequest,
    deleteActivityRequest,
    updateActivityRequest,

 } from "../api/activity_user";

const ActivityContext = createContext()

export const useActivity = () => {
    const context = useContext(ActivityContext)

    if (!context) {
        throw new Error("useAuth debe estar dentro de AuthProvider")
    }

    return context;
}

// eslint-disable-next-line react/prop-types
export function ActivityProvider({ children }){

    // eslint-disable-next-line no-unused-vars
    const [ activitys, setActivitys ] = useState([])

    //obtner todos
    const getActivitys = async() => {
        try {
            const res = await getActivitysRequest()
            setActivitys(res.data)
        } catch (error) {
            console.log(error);
        }
    }

    //create
    const createActivity = async (activity) => {
        const cantidadNumerica = parseFloat(activity.cantidad);
        const newActivity = { ...activity, cantidad: cantidadNumerica };
    
        const res = await createActivityRequest(newActivity);
        console.log(res);
      };

    //elimina una tarea
    const deleteActivity = async (id) => {
        try {
            const res = await deleteActivityRequest(id)
            if (res.status === 204) setActivitys(activitys.filter(activity => activity._id !== id))
        } catch (error) {
            console.log(error);
        }

    };

    //llamar una sola tarea
    const getActivity = async (id) => {
        try {
            const res = await getActivityRequest(id);
            return res.data;
        } catch (error) {
            console.log(error);
        }
    };

    //actualiza una tarea
    const updateActivity = async (id, activity) => {
        try {
            await updateActivityRequest(id, activity)
        } catch (error) {
            console.log(error);
        }

    };
      
    return(
        <ActivityContext.Provider 
            value={{
                activitys,
                getActivitys,
                getActivity,
                createActivity,
                deleteActivity,
                updateActivity,
            }}
        >
            {children}
        </ActivityContext.Provider>
    )
}