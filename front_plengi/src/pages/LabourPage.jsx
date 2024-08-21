import { useEffect } from "react"
import { useLabour } from "../context/Labour_user_context"
import LabourCard from "../components/Labour_user_card";

function LabourPage() {

  const { getLabours, labours } = useLabour()

  useEffect(() => {
    getLabours()
  }, [])

  if(labours.length === 0) return (<h1>No hay mano de obra</h1>)

  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-2">
      {
        labours.map(labour => (
          <LabourCard labour={labour} key={labour._id}/>
        ))
      }
    </div>
  )
    
}

export default LabourPage