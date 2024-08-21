import { useEffect } from "react"
import { useEquipo } from "../context/Equipo_user_context"
import EquipoCard from "../components/Equipo_user_card";

function EquipoPage() {

  const { getEquipos, equipos } = useEquipo()

  useEffect(() => {
    getEquipos()
  }, [])

  if(equipos.length === 0) return (<h1>No hay equipos</h1>)

  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-2">
      {
        equipos.map(equipo => (
          <EquipoCard equipo={equipo} key={equipo._id}/>
        ))
      }
    </div>
  )
    
}

export default EquipoPage