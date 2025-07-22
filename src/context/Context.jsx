import React, { createContext, useState } from 'react';

export const Context = createContext();

export const ContextProvider = ({ children }) => {
  const [contexto, setContexto] = useState({
    turno: true,
    daño: null,
    cura: null,
    energia: null,
    global: false,
    cartaSeleccionada: null,
    cartaEspSeleccionada: null,
    activarUlti: false, 
    esUlti: false,
    contDerrotaPjs: 0,
    contDerrotaOpn: 0,
    darCarta: false
  });

  const generarCartas = () => {
    return Array.from({ length: 26 }, () => ({ vida: 10, energia: 0, esDerrotado: false, efecto: false }));
  };

  const [cartaContexto, setCartaContexto] = useState(generarCartas());

  const [dadosContexto, setDadosContexto] = useState([1, 1, 2, 1, 2, 1, 2]);

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

  const actualizarDados = (indice, nuevoValor) => {
    setDadosContexto((prevDados) =>
      prevDados.map((valor, i) => (i === indice ? nuevoValor : valor))
    );
  };

  return (
    <Context.Provider value={{ contexto, actualizarContexto, cartaContexto, actualizarCarta, dadosContexto, actualizarDados }}>
      {children}
    </Context.Provider>
  );
};
