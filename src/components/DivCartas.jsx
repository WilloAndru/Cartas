import React, { useContext } from 'react';
import Carta from './Carta';
import { Context } from '../context/Context';

function DivCartas(props) {
  const { cartaContexto } = useContext(Context);
  const [inicio, fin] = props.intervalo;

  const cartas = props.lista.slice(inicio, fin).map((c, i) => {
    return (
      <Carta
        key={i}
        className={props.className}
        img={c.img}
        backgroundColor={c.backgroundColor}
        costoUlti={c.costoUlti}
        energia={cartaContexto[i].energia || 0}
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


