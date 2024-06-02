import React, { useState } from 'react';
import './Mazo.css';
import personajes from '../datas/personajes';
import Carta from '../Carta';
import { MyContextProvider } from '../Context';
import { Link } from 'react-router-dom';
import { listaMazo } from './listaMazo';

const Mazo = () => {
  const [card, setCard] = useState({});
  const [estadoBoton, setEstadoBoton] = useState(false);

  const setListaHandle = (id) => {
    listaMazo.valor.push(id);
    setCard(prev => ({...prev, [id]: { estado: true }}));
    if (listaMazo.valor.length >= 3) {
      setEstadoBoton(true);
    } if (listaMazo.valor.length === 4) {
      listaMazo.valor.shift();
      setCard(prev => {
        const updatedCard = { ...prev };
        const keys = Object.keys(updatedCard);
        delete updatedCard[keys[0]];
        return updatedCard;
  })}}

  const cartas = personajes.map((carta) => (
    <Carta
      key={carta.id}
      img={carta.img}
      backgroundColor={carta.backgroundColor}
      vida={10}
      costoUlti={carta.costoUlti}
      borderColor={card[carta.id]?.estado ? 'black' : ''}
      onClick={() => setListaHandle(carta.id)}
    />
  ));

  return (
    <MyContextProvider>
      <div className='mazo'>
        <h2>Editar Mazo</h2>
        <h3>Selecciona 3 cartas</h3>
        <div className='divCartas'>{cartas}</div>
        <Link to={estadoBoton ? '/1' : ''}>
          <button
            className='comenzar'
            style={{
              border: estadoBoton && '2px solid black',
              color: estadoBoton && 'black',
            }}
          >
            {estadoBoton ? 'Comenzar' : 'Faltan Cartas'}
          </button>
        </Link>
      </div>
    </MyContextProvider>
  );
};

export default Mazo;

