import React, { useState, useContext } from 'react'
import { Context } from '../context/Context';

function Carta(props) {
  const { contexto, actualizarContexto } = useContext(Context);
  const [vida, setVida] = useState(10);
  const [derrota, setDerrota] = useState(false);
  const [energia, setEnergia] = useState(0);

  const costoUlti = Array.from({ length: props.costoUlti }, (_, i) => (
    <div 
      key={i}
      style={{ backgroundColor: i < energia ? 'yellow' : 'transparent' }}
    >
    </div>
  ))

  const handleClickCarta = () => {
    if (props.className != "divOponentes") {   
      props.onClick();
      actualizarContexto({ cartaSeleccionada: { id: props.id } });
    } else if (props.className == "divOponentes" && contexto.daño) {
      const nuevaVida = vida - contexto.daño;
      if (nuevaVida <= 0) { setDerrota(true) };
      setVida(nuevaVida);
      setEnergia(prev => prev + 1);
      if (props.costoUlti == energia) { actualizarContexto({ activarUlti: true }) };
      actualizarContexto({ daño: null, turno: false, cartaSeleccionada: null })
    }
  };
  
  return (
    <button
      style={{ 
        backgroundColor: props.backgroundColor,
        pointerEvents: (contexto.daño && props.className.includes("divOponentes")) ? "all" : "",
        borderColor: (contexto.daño && props.className.includes("divOponentes")) ? "red" : "",
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
