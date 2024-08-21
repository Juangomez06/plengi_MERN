import { useEffect } from "react"
import { useMaterial } from "../context/Material_user_context"
import MaterialCard from "../components/Material_user_card";

function MaterialPage() {

  const { getMaterials, materials } = useMaterial()

  useEffect(() => {
    getMaterials()
  }, [])

  if(materials.length === 0) return (<h1>No hay Materiales</h1>)

  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-2">
      {
        materials.map(material => (
          <MaterialCard material={material} key={material._id}/>
        ))
      }
    </div>
  )
    
}

export default MaterialPage