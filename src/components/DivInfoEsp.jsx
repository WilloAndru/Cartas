import React, { useContext } from 'react'
import { Context } from '../context/Context';

function DivInfoEsp(props) {
  const { actualizarContexto } = useContext(Context);
  const { carta } = props;

  const handleClickBoton = () => {
    carta.cura ? actualizarContexto({ cura: carta.cura } ) : actualizarContexto({ energia: carta.energia } )
  }

  return (
    <div className='divInfoEsp no-reset'>
      <h3>{carta.id}</h3>
      <p>{carta.description}</p>
      <button
        onClick={handleClickBoton}
      >
        <b>Usar</b>
      </button>
    </div>
  )
}

export default DivInfoEsp