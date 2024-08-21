import { useForm } from "react-hook-form";
import { useMaterial } from "../context/Material_user_context";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
 
function MaterialFormPage() {

  const { register, handleSubmit, setValue } = useForm()
  const { createMaterial, getMaterial, updateMaterial } = useMaterial()
  const navigate = useNavigate()
  const params = useParams()

  useEffect(() => {
    async function loadMaterial() {
      if (params.id) {
        const material = await getMaterial(params.id)
        console.log(material);
        setValue('material', material.material)
        setValue('unidad', material.unidad)
        setValue('val_unitario', material.val_unitario)
      }
    }
    loadMaterial()
  }, [])

  const onSubmit = handleSubmit((data) => {
    if (params.id) {
      updateMaterial(params.id, data);
    } else {
      createMaterial(data);
    }
    navigate('/material')
  })

  return (
    <div className='flex h-[calc(100vh-100px)] items-center justify-center'>
      <div className='bg-zinc-800 max-w-md w-full p-10 rounded-md'>

        <label htmlFor="material">Material</label>

        <form onSubmit={onSubmit}>
          <input
            type="text" placeholder="Material"
            {...register("material")}
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

export default MaterialFormPage