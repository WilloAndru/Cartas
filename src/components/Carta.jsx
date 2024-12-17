import React, { useState, useContext } from 'react'
import { Context } from '../context/Context';
import { turnoIA } from '../functions/turnoIA';

function Carta(props) {
  const { contexto, actualizarContexto, cartaContexto, actualizarCarta } = useContext(Context);
  const [derrota, setDerrota] = useState(false);
  const [vida, setVida] = useState(10);

  const costoUlti = Array.from({ length: props.costoUlti }, (_, i) => (
    <div
      key={i}
      style={{ backgroundColor: i < cartaContexto[props.id].energia ? 'yellow' : '' }}
    >
    </div>
  ))

  const simularClickEsc = () => {
    const escEvent = new KeyboardEvent("keydown", {
      key: "Escape",
      code: "Escape",
      keyCode: 27,
      bubbles: true,
      cancelable: true,
    });
    document.dispatchEvent(escEvent);
  };

  const handleClickCarta = () => {
    //seleccionar personaje
    if (props.className == "divPersonajes" && contexto.turno) {
      //buffear
      if (contexto.cura || contexto.energia) {
        if (contexto.energia) {
          actualizarCarta(props.id, { energia: cartaContexto[props.id]?.energia + contexto.energia })
        } else {
          setVida(vida + contexto.cura)
        }
        actualizarCarta(contexto.cartaEspSeleccionada, { noDisplay: true })
        actualizarContexto({ cura: null, energia: null, cartaEspSeleccionada: null })
        simularClickEsc()
      } 
      //seleccionar
      else {
        props.onClick();
        actualizarContexto({ cartaSeleccionada: props.id, daño: null })
        cartaContexto[props.id].energia >= props.costoUlti ? actualizarContexto({ activarUlti: true }) : actualizarContexto({ activarUlti: false })
      }
    } 
    //seleccionar especial
    else if (props.className == "divEspeciales" && contexto.turno) {
      props.onClick();
      actualizarContexto({ cura: null, energia: null, cartaEspSeleccionada: props.id })
    } 
    //seleccion personaje IA
    else if (props.className == "divOponentes" && !contexto.turno) {
      actualizarContexto({ cartaOpnSeleccionada: props.id })
      cartaContexto[props.id].energia >= props.costoUlti ? actualizarContexto({ activarUlti: true }) : actualizarContexto({ activarUlti: false })
    }
    //atacar oponente
    else if (props.className == "divOponentes" && contexto.daño && contexto.turno) {
      vida - contexto.daño <= 0 ? setDerrota(true) : setVida(vida - contexto.daño)
      if (contexto.esUlti) {
        actualizarCarta(contexto.cartaSeleccionada, { energia: 0 })
      } else {
        actualizarCarta(contexto.cartaSeleccionada, { energia: cartaContexto[contexto.cartaSeleccionada]?.energia + 1 })
      }
      actualizarContexto({ turno: false });
      turnoIA(contexto, actualizarContexto, cartaContexto, actualizarCarta);
    } 
    //atacar IA
    else if (props.className == "divPersonajes" && contexto.daño && !contexto.turno) {
      vida - contexto.daño <= 0 ? setDerrota(true) : setVida(vida - contexto.daño)
      if (contexto.esUlti) {
        actualizarCarta(contexto.cartaOpnSeleccionada, { energia: 0 })
      } else {
        actualizarCarta(contexto.cartaOpnSeleccionada, { energia: cartaContexto[contexto.cartaOpnSeleccionada]?.energia + 1 })
      }
    }
  };

  return (
    <button
      id={props.id}
      className={(contexto.cartaSeleccionada == props.id ? "focus" : "") || (contexto.cartaOpnSeleccionada == props.id ? "focus" : "")}
      style={{
        backgroundColor: props.backgroundColor,
        borderColor: 
        (contexto.daño && props.className === "divOponentes" && contexto.turno) ? "red" :
        ((contexto.cura || contexto.energia) && props.className === "divPersonajes" && contexto.turno) ? "lime" : "",
        display: cartaContexto[props.id]?.noDisplay && "none"
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
