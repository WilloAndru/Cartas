import React, { useContext } from 'react';
import Carta from './Carta';
import { Context } from '../context/Context';

function DivCartas(props) {
  const { contexto } = useContext(Context);

  let ajusteId = 0;
  let classMutable = "";
  switch (props.className) {
    case "divPjsCss":
      ajusteId = 0
      classMutable = contexto.turno ? "0" : "2"
      break;
    case "divEspCss":
      ajusteId = 3
      classMutable = contexto.turno ? "1" : "3"
      break;
    case "divOpnCss":
      ajusteId = 13
      classMutable = contexto.turno ? "2" : "0"
      break;
    case "divEspOpnCss":
      ajusteId = 16
      classMutable = contexto.turno ? "3" : "1"
      break;
  }

  const cartas = props.lista.map((c, i) => {
    return (
      <Carta
        key={i}
        id={i + ajusteId}
        className={props.className + classMutable + c.name}
        img={props.className == "divEspOpnCss" ? "escudo.png" : c.img}
        backgroundColor={c.backgroundColor}
        costoUlti={c.costoUlti}
        onClick={() => props.clickCarta(c)}
        focusMazo={props.focusMazo}
      />
    );
  });

  return (
    <div className={`no-reset ${props.className}`}>
      {cartas}
    </div>
  );
}

export default DivCartas;


