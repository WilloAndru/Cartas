import React, { useContext } from 'react'
import { Context } from '../context/Context';

function DivInfoEsp(props) {
  const { actualizarContexto } = useContext(Context);
  const { carta } = props;

  const handleClickBoton = () => {
    if (carta.cura) {
      actualizarContexto({ cura: carta.cura })
    } else if (carta.energia) {
      actualizarContexto({ energia: carta.energia })
    } else {
      actualizarContexto({ darCarta: true })
    }
  }

  return (
    <div className='divInfoEsp no-reset'>
      <h3>{carta.name}</h3>
      <p>{carta.description}</p>
      <button className='button' onClick={handleClickBoton}>Usar</button>
    </div>
  )
}

export default DivInfoEsp