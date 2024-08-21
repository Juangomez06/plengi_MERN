import { useForm } from "react-hook-form";
import { useActivity } from "../context/Activity_user_context";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

function ActivityFormPage() {

  const { register, handleSubmit, setValue } = useForm()
  const { createActivity, getActivity, updateActivity } = useActivity()
  const navigate = useNavigate()
  const params = useParams()

  useEffect(() => {
    async function loadActivity() {
      if (params.id) {
        const activity = await getActivity(params.id)
        console.log(activity);
        setValue('actividad', activity.actividad)
        setValue('unidad', activity.unidad)
        setValue('cantidad', activity.cantidad)
      }
    }
    loadActivity()
  }, [])

  const onSubmit = handleSubmit((data) => {
    if (params.id) {
      updateActivity(params.id, data);
    } else {
      createActivity(data);
    }
    navigate('/activity')
  })

  return (
    <div className='flex h-[calc(100vh-100px)] items-center justify-center'>
      <div className='bg-zinc-800 max-w-md w-full p-10 rounded-md'>

        <label htmlFor="actividad">Actividad</label>

        <form onSubmit={onSubmit}>
          <input
            type="text" placeholder="Actividad"
            {...register("actividad")}
            className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2'
            autoFocus
          />

          <label htmlFor="unidad">Unidad</label>

          <input type="text" placeholder="Unidad"
            {...register("unidad")}
            className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2'
          ></input>

          <label htmlFor="cantidad">Cantidad</label>
          <input
            type="text"
            placeholder="Cantidad"
            {...register("cantidad")}
            className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2'
          />

          <button className='bg-indigo-500 px-3 py-2 rounded-md'>Guardar</button>
        </form>

      </div>
    </div>
  )
}

export default ActivityFormPage