import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../context/Context';

function Carta(props) {
  const { contexto, actualizarContexto, cartaContexto, actualizarCarta } = useContext(Context);

  useEffect(() => {
    setTimeout(() => {
      actualizarCarta(props.id, { efecto: false });
    }, 1000);
  }, [cartaContexto[props.id].efecto])

  const costoUlti = Array.from({ length: props.costoUlti }, (_, i) => (
    <div
      key={i}
      style={{ backgroundColor: i < cartaContexto[props.id]?.energia ? 'yellow' : '' }}
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

  const cambioEnergia = (carta) => {
    if (contexto.esUlti) {
      actualizarCarta(carta, { energia: 0 })
    } else {
      actualizarCarta(carta, { energia: cartaContexto[carta]?.energia + 1 })
    }
  };

  const handleClickCarta = () => {
    //seleccionar carta, buffear
    if (props.className.includes("0")) {
      //seleccionar carta
      if (!contexto.cura && !contexto.energia) {
        props.onClick();
        actualizarContexto({ cartaSeleccionada: props.id, daño: null, cura: null, energia: null, cartaEspSeleccionada: null });
        cartaContexto[props.id].energia >= props.costoUlti ? actualizarContexto({ activarUlti: true }) : actualizarContexto({ activarUlti: false });
      }
      //buffear
      else {
        actualizarCarta(props.id, { vida: cartaContexto[props.id].vida + contexto.cura, energia: cartaContexto[props.id].energia + contexto.energia });
        contexto.cura && actualizarCarta(props.id, { efecto: `+ ${contexto.cura}` });
        //de carta especial
        if (contexto.cartaEspSeleccionada) {
          const cartaSeleccionada = document.getElementById(contexto.cartaEspSeleccionada);
          cartaSeleccionada.remove();
          actualizarContexto({ cartaEspSeleccionada: null });
          simularClickEsc();
        }
        //de habilidad
        else {
          cambioEnergia(contexto.cartaSeleccionada);
          actualizarContexto({ turno: !contexto.turno });
        }
      }
    }
    //atacar oponente
    else if (props.className.includes("2") && contexto.daño) {
      if (cartaContexto[props.id].vida - contexto.daño <= 0) {
        actualizarCarta(props.id, { esDerrotado: true });
        [0, 1, 2].includes(props.id) ? actualizarContexto({ contDerrotaPjs: contexto.contDerrotaPjs + 1 }) :
          actualizarContexto({ contDerrotaOpn: contexto.contDerrotaOpn + 1 })
      } else {
        actualizarCarta(props.id, { vida: cartaContexto[props.id].vida - contexto.daño });
      }
      actualizarCarta(props.id, { efecto: `- ${contexto.daño}` });
      cambioEnergia(contexto.cartaSeleccionada);
      actualizarContexto({ turno: !contexto.turno });
    }
    //seleccionar especial
    else if (props.className.includes("1") || props.className.includes("3")) {
      props.onClick();
      actualizarContexto({ cartaEspSeleccionada: props.id });
    }
  };

  return (
    <button
      id={props.id}
      className={`${props.className} ${(contexto.cartaSeleccionada === props.id || contexto.cartaEspSeleccionada === props.id) ? "focus" : ""}`}
      style={{
        pointerEvents: cartaContexto[props.id]?.esDerrotado ? "none" : "all",
        backgroundColor: props.backgroundColor,
        borderColor: (contexto.daño && props.className.includes("divOpnCss") && contexto.turno && !cartaContexto[props.id]?.esDerrotado) ? "red" :
          ((contexto.cura || contexto.energia) && props.className.includes("divPjsCss") && contexto.turno && !cartaContexto[props.id]?.esDerrotado) ? "lime" :
            (props.focusMazo && props.focusMazo.includes(props.id)) ? "#ffd700" : "",
      }}
      onClick={handleClickCarta}
    >
      {cartaContexto[props.id].efecto && <h1 className='efecto' style={{ color: cartaContexto[props.id].efecto.includes("+") ? "lime" : "red" }}>{cartaContexto[props.id].efecto}</h1>}
      <img src={!cartaContexto[props.id]?.esDerrotado ? props.img : "x.png"} />
      <div className='statsCarta'>
        <h3>{!cartaContexto[props.id]?.esDerrotado ? cartaContexto[props.id]?.vida : 0}</h3>
        {costoUlti}
      </div>
    </button>
  )
}

export default Carta
