import React, { useState, useEffect, useContext } from 'react';
import DivCartas from '../components/DivCartas';
import personajes from '../data/personajes';
import cartasEspeciales from '../data/cartasEspeciales';
import DivHabilidades from '../components/DivHabilidades';
import DivInfoEsp from '../components/DivInfoEsp';
import { Context } from '../context/Context';

function Principal() {
  const { contexto, actualizarContexto } = useContext(Context);
  const [cartaPjSelec, setCartaPjSelec] = useState(false);
  const [cartaEspSelec, setCartaEspSelec] = useState(false);

  const resetStates = () => {
    setCartaPjSelec(false);
    setCartaEspSelec(false);
    actualizarContexto({ daño: null })
  };

  const volverEstado = (event) => {
    if (!event.target.closest('.no-reset')) {
      resetStates();
    }
  };

  const volverEstadoEsc = (event) => {
    if (event.key === 'Escape') {
      resetStates();
    }
  };

  useEffect(() => {
    window.addEventListener('click', volverEstado, { passive: true });
    window.addEventListener('keydown', volverEstadoEsc);
    return () => {
      window.removeEventListener('click', volverEstado);
      window.removeEventListener('keydown', volverEstadoEsc);
    };
  }, []);

  return (
    <div
      className="body"
      style={{ backgroundColor: `${contexto.daño ? "#aaaaaa" : "#dedede"}` }}
    >
      <DivCartas
        turno={false}
        lista={personajes}
        intervalo={[0, 3]}
      />
      <DivCartas
        turno={true}
        lista={personajes}
        intervalo={[3, 6]}
        clickCarta={(carta) => setCartaPjSelec(carta)}
      />
      <DivCartas
        turno={true}
        esEspecial={true}
        lista={cartasEspeciales}
        intervalo={[0, 5]}
        clickCarta={(carta) => setCartaEspSelec(carta)}
      />
      {cartaPjSelec && (
        <DivHabilidades
          carta={cartaPjSelec}
        />
      )}
      {cartaEspSelec && (
        <DivInfoEsp
          carta={cartaEspSelec}
        />
      )}
    </div>
  );
}

export default Principal;
