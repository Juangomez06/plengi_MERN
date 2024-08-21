import { useForm } from "react-hook-form";
import { useLabour } from "../context/Labour_user_context";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

function LabourFormPage() {

  const { register, handleSubmit, setValue } = useForm()
  const { createLabour, getLabour, updateLabour } = useLabour()
  const navigate = useNavigate()
  const params = useParams()

  useEffect(() => {
    async function loadLabour() {
      if (params.id) {
        const labour = await getLabour(params.id)
        setValue('mano_obra', labour.mano_obra)
        setValue('unidad', labour.unidad)
        setValue('val_unitario', labour.val_unitario)
      }
    }
    loadLabour()
  }, [])

  const onSubmit = handleSubmit((data) => {
    if (params.id) {
      updateLabour(params.id, data);
    } else {
      createLabour(data);
    }
    navigate('/labour')
  })

  return (
    <div className='flex h-[calc(100vh-100px)] items-center justify-center'>
      <div className='bg-zinc-800 max-w-md w-full p-10 rounded-md'>

        <label htmlFor="mano_obra">Mano de obra</label>

        <form onSubmit={onSubmit}>
          <input
            type="text" placeholder="Labour"
            {...register("mano_obra")}
            className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2'
            autoFocus
          />

          <label htmlFor="unidad">Unidad</label>

          <input type="text" placeholder="Unidad"
            {...register("unidad")}
            className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2'
          ></input>

          <label htmlFor="val_unitario">Valor unitario</label>
          <input
            type="number"
            placeholder="Valor unitario"
            {...register("val_unitario")}
            className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2'
          />

          <button className='bg-indigo-500 px-3 py-2 rounded-md'>Guardar</button>
        </form>

      </div>
    </div>
  )
}

export default LabourFormPage