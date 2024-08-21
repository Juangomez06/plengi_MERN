import { useApu } from "../context/Apu_user_context";
import { useMaterial } from "../context/Material_user_context";
import { useEquipo } from "../context/Equipo_user_context";
import { useLabour } from "../context/Labour_user_context";
import { useEffect } from "react";

function ApuPagePrueba() {
  const { apus, getApus } = useApu();
  const { materials, getMaterials } = useMaterial();
  const { equipos, getEquipos } = useEquipo();
  const { labours, getLabours } = useLabour();
  
  useEffect(() => {
    getApus();
    getMaterials();
    getEquipos();
    getLabours();
  }, []);

  return (
    <div>
      <h1>APU Page</h1>
      {/* Aquí mostrar los APUs */}
      {apus.map((apu) => (
        <div key={apu.id} className='bg-zinc-800 max-w-md w-full p-10 rounded-md'>
          <h2>{apu.apu}</h2>
          {/* Aquí mostrar los materiales, equipos y mano de obra del APU */}
          <h3>Materiales:</h3>
          {materials.map((material) => (
            <div key={material.id} className='bg-zinc-700 text-white px-4 py-2 rounded-md my-2'>
              <p>{material.material}</p>
              {/* Aquí mostrar los campos adicionales para cantidad y desperdicio */}
              <p>Cantidad: {material.cantidad}</p>
              <p>Desperdicio: {material.desperdicio}</p>
              {/* Aquí el formulario para editar cantidad y desperdicio */}
              {/* ... */}
            </div>
          ))}
          <h3>Equipos:</h3>
          {equipos.map((equipo) => (
            <div key={equipo.id} className='bg-zinc-700 text-white px-4 py-2 rounded-md my-2'>
              <p>{equipo.equipo}</p>
              {/* Aquí el formulario para editar campos del equipo */}
              {/* ... */}
            </div>
          ))}
          <h3>Mano de Obra:</h3>
          {labours.map((labour) => (
            <div key={labour.id} className='bg-zinc-700 text-white px-4 py-2 rounded-md my-2'>
              <p>{labour.labour}</p>
              {/* Aquí el formulario para editar campos de la mano de obra */}
              {/* ... */}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
  
  
  
}

export default ApuPagePrueba;
