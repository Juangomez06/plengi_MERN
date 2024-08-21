import axios from "./axios_user";

//obtener todos 
export const getMaterialsRequest = () => axios.get('/material')

//obtener uno
export const getMaterialRequest = (id) => axios.get(`/material/${id}`)

//crear
export const createMaterialRequest = (material) => axios.post('/material', material)

//actualizar
export const updateMaterialRequest = (id, material) => axios.put(`/material/${id}`, material)

//eliminar
export const deleteMaterialRequest = (id) => axios.delete(`/material/${id}`)
