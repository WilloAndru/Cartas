import React from 'react';
import Carta from './Carta';

function DivCartas(props) {
  const [inicio, fin] = props.intervalo;

  const cartas = props.lista.slice(inicio, fin).map((c, i) => {
    return (
      <Carta
        key={i}
        img={c.img}
        turno={props.turno}
        backgroundColor={c.backgroundColor}
        costoUlti={c.costoUlti}
        onClick={() => props.clickCarta(c)}
      />
    );
  });

  return (
    <div className={`divCartas ${props.turno ? "no-reset" : ""} ${props.esEspecial ? "divEspeciales" : ""}`}>
      {cartas}
    </div>
  );
}

export default DivCartas;


