import { useEffect } from "react"
import { useApu } from "../context/Apu_user_context"
import Apu_user_card from "../components/Apu_user_card";

function ApuPage() {

  const { getApus, apus } = useApu()

  useEffect(() => {
    getApus()
  }, [])

  if(apus.length === 0) return (<h1>No hay A.P.U disponibles</h1>)

  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-2">
      {
        apus.map(apu => (
          <Apu_user_card apu={apu} key={apu._id}/>
        ))
      }
    </div>
  )
    
}

export default ApuPage