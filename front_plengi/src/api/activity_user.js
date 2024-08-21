import axios from "./axios_user";

//obtener todos 
export const getActivitysRequest = () => axios.get('/activity')

//obtener uno
export const getActivityRequest = (id) => axios.get(`/activity/${id}`)

//crear
export const createActivityRequest = (activity) => axios.post('/activity', activity)

//actualizar
export const updateActivityRequest = (id, activity) => axios.put(`/activity/${id}`, activity)

//eliminar
export const deleteActivityRequest = (id) => axios.delete(`/activity/${id}`)
