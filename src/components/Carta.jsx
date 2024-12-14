import React, { useState, useContext } from 'react'
import { Context } from '../context/Context';

function Carta(props) {
  const { contexto, actualizarContexto } = useContext(Context);
  const [vida, setVida] = useState(10);
  const [derrota, setDerrota] = useState(false);
  const energia = contexto.cartaSeleccionada === props.id ? contexto.energia : 0;

  const costoUlti = Array.from({ length: props.costoUlti }, (_, i) => (
    <div 
      key={i}
      style={{ backgroundColor: i < props.energia ? 'yellow' : 'transparent' }}
    >
    </div>
  ))

  const handleClickCarta = () => {
    if (props.className != "divOponentes") {   
      props.onClick();
    } else if (props.className != "divPersonajes" && contexto.daño) {
      const nuevaVida = vida - contexto.daño;
      if (nuevaVida <= 0) {
        setDerrota(true);
      }
      setVida(nuevaVida);
      actualizarContexto({ daño: null, turno: false })
    }
    if (contexto.cartaSeleccionada === props.id) {
      if (contexto.ganaEnergia) {
        actualizarContexto({ energia: contexto.energia + 1 });
      } else {
        actualizarContexto({ energia: 0 }); // Reiniciamos la energía cuando ganaEnergia es false
      }
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
