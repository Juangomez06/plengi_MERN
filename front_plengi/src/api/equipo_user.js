import axios from "./axios_user";

//obtener todos 
export const getEquiposRequest = () => axios.get('/equipo')

//obtener uno
export const getEquipoRequest = (id) => axios.get(`/equipo/${id}`)

//crear
export const createEquipoRequest = (equipo) => axios.post('/equipo', equipo)

//actualizar
export const updateEquipoRequest = (id, equipo) => axios.put(`/equipo/${id}`, equipo)

//eliminar
export const deleteEquipoRequest = (id) => axios.delete(`/equipo/${id}`)
