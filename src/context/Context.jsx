import React, { createContext, useState } from 'react';

export const Context = createContext();

export const ContextProvider = ({ children }) => {
  const [contexto, setContexto] = useState({
    turno: true,
    daño: null,
    cura: null,
    activarUlti: false
  });

  const actualizarContexto = (nuevosValores) => {
    setContexto((prevContexto) => ({
      ...prevContexto,
      ...nuevosValores,
    }));
  };


  return (
    <Context.Provider value={{ contexto, actualizarContexto }}>
      {children}
    </Context.Provider>
  );
};
