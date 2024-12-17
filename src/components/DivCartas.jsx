import React from 'react';
import Carta from './Carta';

function DivCartas(props) {
  const [inicio, fin] = props.intervalo;
  let ajusteId = 0;
  switch (props.className) {
    case "divEspecialesOpn":
      ajusteId = 6
      break;
    case "divEspeciales":
      ajusteId = 11
      break;
  }

  const cartas = props.lista.slice(inicio, fin).map((c, i) => {
    return (
      <Carta
        key={i}
        id={inicio + i + ajusteId}
        className={props.className}
        img={props.className == "divEspecialesOpn" ? "escudo.png" : c.img}
        backgroundColor={c.backgroundColor}
        costoUlti={c.costoUlti}
        onClick={() => props.clickCarta(c)}
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


