import React, { useState } from 'react';
import DivCartas from '../components/DivCartas';
import personajes from '../data/personajes';
import { useNavigate } from 'react-router-dom';

function Mazo() {
  const [cartas, setCartas] = useState([]);
  const [son3, setSon3] = useState(false);
  const navigate = useNavigate();

  const actualizarCartas = (personaje) => {
    setCartas((prevCartas) => {
      const nuevasCartas = prevCartas.length < 3
        ? [...prevCartas, personaje.id]
        : [...prevCartas.slice(1), personaje.id];
      setSon3(nuevasCartas.length === 3);
      return nuevasCartas;
    });
  };

  const establecerMazo = (e) => {
    e.preventDefault();
    localStorage.setItem("listaPjsId", JSON.stringify(cartas));
    navigate('/1');
  };

  return (
    <div className="body">
      <h3>Seleccione 3 cartas</h3>
      <DivCartas
        className="divPjsCss 0 mazoCartas"
        lista={personajes}
        clickCarta={actualizarCartas}
        focusMazo={cartas}
      />
      <button className='button' onClick={son3 ? establecerMazo : null}>{son3 ? 'Empezar' : 'Faltan cartas'}</button>
    </div>
  );
}

export default Mazo;
