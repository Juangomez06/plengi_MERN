import { useForm } from "react-hook-form";
import { useEquipo } from "../context/Equipo_user_context";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

function EquipoFormPage() {

  const { register, handleSubmit, setValue } = useForm()
  const { createEquipo, getEquipo, updateEquipo } = useEquipo()
  const navigate = useNavigate()
  const params = useParams()

  useEffect(() => {
    async function loadEquipo() {
      if (params.id) {
        const equipo = await getEquipo(params.id)
        setValue('equipo', equipo.equipo)
        setValue('unidad', equipo.unidad)
        setValue('val_unitario', equipo.val_unitario)
      }
    }
    loadEquipo()
  }, [])

  const onSubmit = handleSubmit((data) => {
    if (params.id) {
      updateEquipo(params.id, data);
    } else {
      createEquipo(data);
    }
    navigate('/equipo')
  })

  return (
    <div className='flex h-[calc(100vh-100px)] items-center justify-center'>
      <div className='bg-zinc-800 max-w-md w-full p-10 rounded-md'>

        <label htmlFor="equipo">Equipo</label>

        <form onSubmit={onSubmit}>
          <input
            type="text" placeholder="Equipo"
            {...register("equipo")}
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

export default EquipoFormPage