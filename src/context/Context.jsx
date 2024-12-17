import React, { createContext, useState } from 'react';

export const Context = createContext();

export const ContextProvider = ({ children }) => {
  const [contexto, setContexto] = useState({
    turno: true,
    daño: null,
    cura: null,
    energia: null,
    activarUlti: false,
    esUlti: false,
    cartaSeleccionada: null,
    cartaEspSeleccionada: null,
    cartaOpnSeleccionada: null,
  });

  const generarCartas = () => {
    return Array.from({ length: 16 }, () => ({ energia: 0, noDisplay: false }));
  };

  const [cartaContexto, setCartaContexto] = useState(generarCartas());

  const actualizarContexto = (nuevosValores) => {
    setContexto((prevContexto) => ({
      ...prevContexto,
      ...nuevosValores,
    }));
  };

  const actualizarCarta = (indice, nuevosAtributos) => {
    setCartaContexto(prev =>
      prev.map((item, index) =>
        index === indice ? { ...item, ...nuevosAtributos } : item
      )
    );
  };

  return (
    <Context.Provider value={{ contexto, actualizarContexto, cartaContexto, actualizarCarta }}>
      {children}
    </Context.Provider>
  );
};
