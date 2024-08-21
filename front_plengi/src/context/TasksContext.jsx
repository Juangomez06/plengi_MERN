import { createContext, useContext, useState } from "react";
import {
    createTaskRequest,
    getTasksRequest,
    deleteTaskRequest,
    getTaskRequest,
    updateTaskRequest,
} from "../api/tasks";

const TaskContext = createContext();

export const useTask = () => {
    const context = useContext(TaskContext)

    if (!context) {
        throw new Error("useAuth debe estar dentro de AuthProvider")
    }

    return context;
}

// eslint-disable-next-line react/prop-types
export function TaskProvider({ children }) {

    const [tasks, setTasks] = useState([])

    //mostrar tareas
    const getTasks = async (tasks) => {
        try {
            const res = await getTasksRequest(tasks)
            setTasks(res.data)
        } catch (error) {
            console.log(error);
        }
    }

    //crear una tarea
    const createTask = async (tasks) => {
        const res = await createTaskRequest(tasks)
        console.log(res);
    };

    //elimina una tarea
    const deleteTask = async (id) => {
        try {
            const res = await deleteTaskRequest(id)
            if (res.status === 204) setTasks(tasks.filter(task => task._id !== id))
        } catch (error) {
            console.log(error);
        }

    };

    //llamar una sola tarea
    const getTask = async (id) => {
        try {
            const res = await getTaskRequest(id);
            return res.data;
        } catch (error) {
            console.log(error);
        }
    };

    //actualiza una tarea
    const updateTask = async (id, task) => {
        try {
            await updateTaskRequest(id, task)
        } catch (error) {
            console.log(error);
        }

    };

    return (
        <TaskContext.Provider value={{
            tasks,
            createTask,
            getTasks,
            deleteTask,
            getTask,
            updateTask,
        }}>
            {children}
        </TaskContext.Provider>
    )
}