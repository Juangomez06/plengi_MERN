import { useEffect } from "react"
import { useActivity } from "../context/Activity_user_context"
import ActivityCard from "../components/Activity_user_card";

function ActivityPage() {

  const { getActivitys, activitys } = useActivity()

  useEffect(() => {
    getActivitys()
  }, [])

  if(activitys.length === 0) return (<h1>No hay Actividades</h1>)

  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-2">
      {
        activitys.map(activity => (
          <ActivityCard activity={activity} key={activity._id}/>
        ))
      }
    </div>
  )
    
}

export default ActivityPage