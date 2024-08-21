import axios from "./axios_user";

//obtener todos 
export const getApusRequest = () => axios.get('/apu')

//obtener uno
export const getApuRequest = (id) => axios.get(`/apu/${id}`)

//crear
export const createApuRequest = (apu) => axios.post('/apu', apu)

//actualizar
export const updateApuRequest = (id, apu) => axios.put(`/apu/${id}`, apu)

//eliminar
export const deleteApuRequest = (id) => axios.delete(`/apu/${id}`)
