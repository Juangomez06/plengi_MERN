import axios from "./axios";

//material
export const getMaterials_BD_Request = () => axios.get('/material')
export const getMaterial_BD_Request = (id) => axios.get(`/material/${id}`)
export const createMaterial_BD_Request = (material) => axios.post('/material', material)

//equipo
export const getEquipos_BD_Request = () => axios.get('/equipo')
export const getEquipo_BD_Request = (id) => axios.get(`/equipo/${id}`)
export const createEquipo_BD_Request = (equipo) => axios.post('/equipo', equipo)

//Mano de obra 
export const getLabours_BD_Request = () => axios.get('/labour')
export const getLabour_BD_Request = (id) => axios.get(`/labour/${id}`)
export const createLabour_BD_Request = (labour) => axios.post('/labour', labour)
