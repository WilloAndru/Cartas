import React, { createContext, useState } from 'react';

export const Context = createContext();

export const ContextProvider = ({ children }) => {
  const [contexto, setContexto] = useState({
    turno: true,
    daño: null,
    cura: null,
  });

  const inicializarCartas = () => {
    const cartas = [];
    for (let i = 0; i < 6; i++) {
      cartas.push({ energia: 0, activarUlti: false });
    }
    return cartas;
  };

  const [cartaContexto, setCartaContexto] = useState(inicializarCartas);

  const actualizarContexto = (nuevosValores) => {
    setContexto((prevContexto) => ({
      ...prevContexto,
      ...nuevosValores,
    }));
  };

  const actualizarCarta = (id, nuevaEnergia) => {
    setCartaContexto((prevCartas) => 
      prevCartas.map((carta) =>
        carta.id === id ? { ...carta, energia: nuevaEnergia } : carta
      )
    );
  };

  return (
    <Context.Provider value={{ contexto, actualizarContexto, cartaContexto, actualizarCartas }}>
      {children}
    </Context.Provider>
  );
};
