import axios from "./axios_user";

//obtener todos 
export const getLaboursRequest = () => axios.get('/labour')

//obtener uno
export const getLabourRequest = (id) => axios.get(`/labour/${id}`)

//crear
export const createLabourRequest = (labour) => axios.post('/labour', labour)

//actualizar
export const updateLabourRequest = (id, labour) => axios.put(`/labour/${id}`, labour)

//eliminar
export const deleteLabourRequest = (id) => axios.delete(`/labour/${id}`)
