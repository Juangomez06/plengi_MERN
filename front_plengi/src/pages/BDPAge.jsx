import { useEffect } from "react"
import { useBD } from "../context/BDContext"
import BDCard from "../components/BDCard";

function BDPage() {

  const {
    equipos,
    materials,
    labours,
    getEquipos_BD,
    getLabours_BD,
    getMaterials_BD,

  } = useBD()

  useEffect(() => {
    getEquipos_BD(),
    getLabours_BD(),
    getMaterials_BD()
  }, [])

  
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-2">
      {equipos.map((equipo) => (
        <BDCard bd={equipo} key={equipo._id} />
      ))}
      {labours.map((labour) => (
        <BDCard bd={labour} key={labour._id} />
      ))}
      {materials.map((material) => (
        <BDCard bd={material} key={material._id} />
      ))}
    </div>
  )

}

export default BDPage