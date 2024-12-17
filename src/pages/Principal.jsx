import React, { useState, useEffect, useContext, useRef } from 'react'; 
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
  const bodyRef = useRef(null);

  const resetStates = () => {
    setCartaPjSelec(false);
    setCartaEspSelec(false);
    actualizarContexto({ daño: null, cura: null, energia: null })
  }

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

  const bloquearCursor = () => {
    if (bodyRef.current) {
      bodyRef.current.requestPointerLock();
    }
  };

  const liberarCursor = () => {
    if (document.pointerLockElement === bodyRef.current) {
      document.exitPointerLock();
    }
  };

  useEffect(() => {
    if (!contexto.turno) {
      bloquearCursor();
      setCartaPjSelec(false);
      setCartaEspSelec(false);
    } else {
      liberarCursor();
    }

    window.addEventListener('click', volverEstado, { passive: true });
    window.addEventListener('keydown', volverEstadoEsc);

    return () => {
      liberarCursor();
      window.removeEventListener('click', volverEstado);
      window.removeEventListener('keydown', volverEstadoEsc);
    };
  }, [contexto.turno]);

  return (
    <div
      ref={bodyRef}
      className="body"
      style={{ backgroundColor: `${((contexto.daño || contexto.cura || contexto.energia) && contexto.turno) ? "#aaaaaa" : "#dedede"}` }}
    >
      <DivCartas
        className="divEspecialesOpn"
        lista={cartasEspeciales}
        intervalo={[0, 5]}
        clickCarta={(carta) => setCartaEspSelec(carta)}
      />
      <DivCartas
        className="divOponentes"
        lista={personajes}
        intervalo={[0, 3]}
        clickCarta={(carta) => setCartaPjSelec(carta)}
      />
      <DivCartas
        className="divPersonajes"
        lista={personajes}
        intervalo={[3, 6]}
        clickCarta={(carta) => setCartaPjSelec(carta)}
      />
      <DivCartas
        className="divEspeciales"
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
