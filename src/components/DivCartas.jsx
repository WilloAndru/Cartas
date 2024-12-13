import React from 'react';
import Carta from './Carta';

function DivCartas(props) {
  const [inicio, fin] = props.intervalo;

  const cartas = props.lista.slice(inicio, fin).map((c, i) => {
    return (
      <Carta
        key={i}
        className={props.className}
        img={c.img}
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


