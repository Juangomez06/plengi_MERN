import { useEffect, useState } from "react";
import { useBD } from "../context/BDContext";

function ApuSearch() {
  const { materials, equipos, labours } = useBD();
  const [materialResults, setMaterialResults] = useState([]);
  const [equipoResults, setEquipoResults] = useState([]);
  const [labourResults, setLabourResults] = useState([]);
  const [materialSearchTerm, setMaterialSearchTerm] = useState("");
  const [equipoSearchTerm, setEquipoSearchTerm] = useState("");
  const [labourSearchTerm, setLabourSearchTerm] = useState("");

  useEffect(() => {
    filterMaterials();
  }, [materialSearchTerm, materials]);

  useEffect(() => {
    filterEquipos();
  }, [equipoSearchTerm, equipos]);

  useEffect(() => {
    filterLabours();
  }, [labourSearchTerm, labours]);

  const handleMaterialSearch = (e) => {
    setMaterialSearchTerm(e.target.value);
  };

  const handleEquipoSearch = (e) => {
    setEquipoSearchTerm(e.target.value);
  };

  const handleLabourSearch = (e) => {
    setLabourSearchTerm(e.target.value);
  };

  const filterMaterials = () => {
    // Filtra los resultados de la colección materials basado en el término de búsqueda
    const filteredMaterials = materials.filter((material) =>
      material.nombre.toLowerCase().includes(materialSearchTerm.toLowerCase())
    );

    setMaterialResults(filteredMaterials);
  };

  const filterEquipos = () => {
    // Filtra los resultados de la colección equipos basado en el término de búsqueda
    const filteredEquipos = equipos.filter((equipo) =>
      equipo.nombre.toLowerCase().includes(equipoSearchTerm.toLowerCase())
    );

    setEquipoResults(filteredEquipos);
  };

  const filterLabours = () => {
    // Filtra los resultados de la colección labours basado en el término de búsqueda
    const filteredLabours = labours.filter((labour) =>
      labour.nombre.toLowerCase().includes(labourSearchTerm.toLowerCase())
    );

    setLabourResults(filteredLabours);
  };

  return (
    <div className='flex h-[calc(100vh-100px)] items-center justify-center'>
      <div className='bg-zinc-800 max-w-md p-10 rounded-md'>
        {/* Buscador para la colección materials */}
        <input
          className='text-black mb-2'
          placeholder='Material'
          type='text'
          value={materialSearchTerm}
          onChange={handleMaterialSearch}
        />
        <ul>
          {materialResults.map((result) => (
            <li key={result.id}>
              {result.nombre}
              <input type="text" placeholder="Enviar a" />
              <button
                className='ml-2 bg-green-500 text-white px-2 py-1 rounded'
                onClick={() => {
                  const recipient = document.querySelector('input[type="text"]').value;
                  // Lógica para enviar individualmente el resultado al destinatario especificado
                }}
              >
                Agregar
              </button>
            </li>
          ))}
        </ul>
  
        {/* Buscador para la colección equipos */}
        <input
          className='text-black mb-2'
          placeholder='Equipo'
          type='text'
          value={equipoSearchTerm}
          onChange={handleEquipoSearch}
        />
        <ul>
          {equipoResults.map((result) => (
            <li key={result.id}>
              {result.nombre}
              <input type="text" placeholder="Enviar a" />
              <button
                className='ml-2 bg-green-500 text-white px-2 py-1 rounded'
                onClick={() => {
                  const recipient = document.querySelector('input[type="text"]').value;
                  // Lógica para enviar individualmente el resultado al destinatario especificado
                }}
              >
                Agregar
              </button>
            </li>
          ))}
        </ul>
  
        {/* Buscador para la colección labours */}
        <input
          className='text-black mb-2'
          placeholder='Mano de obra'
          type='text'
          value={labourSearchTerm}
          onChange={handleLabourSearch}
        />
        <ul>
          {labourResults.map((result) => (
            <li key={result.id}>
              {result.nombre}
              <input type="text" placeholder="Enviar a" />
              <button
                className='ml-2 bg-green-500 text-white px-2 py-1 rounded'
                onClick={() => {
                  const recipient = document.querySelector('input[type="text"]').value;
                  // Lógica para enviar individualmente el resultado al destinatario especificado
                }}
              >
                Agregar
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
  
  
  
}

export default ApuSearch;
