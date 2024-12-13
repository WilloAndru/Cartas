import React, { useState, useContext } from 'react'
import { Context } from '../context/Context';

function Carta(props) {
  const { contexto, actualizarContexto } = useContext(Context);
  const [vida, setVida] = useState(10);
  const [derrota, setDerrota] = useState(false);

  const costoUlti = Array.from({ length: props.costoUlti }, (_, i) => (
    <div key={i}></div>
  ))

  const handleClickCarta = () => {
    if (props.turno) {      
      props.onClick();
    } else if (!props.turno && contexto.daño) {
      const nuevaVida = vida - contexto.daño;
      if (nuevaVida <= 0) {
        setDerrota(true);
      }
      setVida(nuevaVida);
      actualizarContexto({ daño: null })
    }
  };
  
  return (
    <button
      className={`${props.turno ? "cartaFocus" : ""}`}
      style={{ 
        backgroundColor: props.backgroundColor,
        pointerEvents: (props.turno || contexto.daño) ? "all" : "none",
        borderColor: (!props.turno && contexto.daño) ? "red" : "",
      }}
      onClick={handleClickCarta}
    >
      <img src={!derrota ? props.img : "x.png"} />
      <div className='statsCarta'>
        <h3>{!derrota ? vida : 0}</h3>
        {costoUlti}
      </div>
    </button>
  )
}

export default Carta