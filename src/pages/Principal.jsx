import React, { useState, useEffect, useContext, useRef } from "react";
import DivCartas from "../components/DivCartas";
import cartasEspeciales from "../data/cartasEspeciales";
import DivHabilidades from "../components/DivHabilidades";
import DivInfoEsp from "../components/DivInfoEsp";
import { Context } from "../context/Context";
import { turnoIA } from "../functions/turnoIA";
import personajes from "../data/personajes";
import { useNavigate } from "react-router-dom";
import { IoMenu } from "react-icons/io5";

function Principal() {
  localStorage.setItem("listaOpnId", JSON.stringify([2, 4, 5]));
  const bodyRef = useRef(null);
  const { contexto, actualizarContexto, cartaContexto, actualizarCarta } =
    useContext(Context);
  const [contTurnos, setContTurnos] = useState(0);
  const [cartaPjSelec, setCartaPjSelec] = useState(false);
  const [cartaEspSelec, setCartaEspSelec] = useState(false);
  const [interfazDerrota, setInterfazDerrota] = useState(false);
  const [interfazVictoria, setInterfazVictoria] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const listaPjsId = JSON.parse(localStorage.getItem("listaPjsId"));
  const [listaPjs] = useState(
    personajes.filter((personaje) => listaPjsId.includes(personaje.id))
  );
  const [listPjsEsp, setListPjsEsp] = useState(
    cartasEspeciales.filter((esp) => esp.id == 2)
  );
  const listaOpnId = JSON.parse(localStorage.getItem("listaOpnId"));
  const [listaOpn] = useState(
    personajes.filter((personaje) => listaOpnId.includes(personaje.id))
  );
  const [listOpnEsp, setListOpnEsp] = useState(
    cartasEspeciales.filter((esp) => esp.id == 2)
  );
  const navigate = useNavigate();

  const resetStates = () => {
    setCartaPjSelec(false);
    setCartaEspSelec(false);
    actualizarContexto({
      daño: null,
      cura: null,
      energia: null,
      cartaSeleccionada: null,
      cartaEspSeleccionada: null,
    });
  };

  const simularClickEsc = () => {
    const escEvent = new KeyboardEvent("keydown", {
      key: "Escape",
      code: "Escape",
      keyCode: 27,
      bubbles: true,
      cancelable: true,
    });
    document.dispatchEvent(escEvent);
  };

  const volverEstado = (event) => {
    if (!event.target.closest(".no-reset")) {
      resetStates();
    }
  };

  const volverEstadoEsc = (event) => {
    if (event.key === "Escape") {
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

  const darCartasEsp = (tipo) => {
    let idAzar = Math.floor(Math.random() * 5);
    idAzar = 4;
    let idAzar2 = 3;
    if (tipo === 0 || tipo === 1) {
      listPjsEsp.length <= 10 &&
        setListPjsEsp((prevList) => [
          ...prevList,
          ...cartasEspeciales.filter((esp) => esp.id === idAzar2),
        ]);
    }
    if (tipo === 0 || tipo === 2) {
      listOpnEsp.length <= 10 &&
        setListOpnEsp((prevList) => [
          ...prevList,
          ...cartasEspeciales.filter((esp) => esp.id === idAzar),
        ]);
    }
  };

  useEffect(() => {
    if (!contexto.turno) {
      setContTurnos((p) => p + 1);
      bloquearCursor();
      turnoIA(actualizarContexto);
      darCartasEsp(0);
    } else {
      liberarCursor();
    }
    resetStates();

    window.addEventListener("click", volverEstado, { passive: true });
    window.addEventListener("keydown", volverEstadoEsc);

    return () => {
      liberarCursor();
      window.removeEventListener("click", volverEstado);
      window.removeEventListener("keydown", volverEstadoEsc);
    };
  }, [contexto.turno]);

  useEffect(() => {
    if (contTurnos > 0 && contexto.darCarta) {
      !contexto.turno ? darCartasEsp(2) : darCartasEsp(1);
      const cartaSeleccionada = document.getElementById(
        contexto.cartaEspSeleccionada
      );
      cartaSeleccionada.remove();
      simularClickEsc();
      actualizarContexto({ darCarta: false });
      actualizarContexto({ cartaEspSeleccionada: null });
    }
  }, [contexto.darCarta]);

  const cambioEnergia = (carta) => {
    if (contexto.esUlti) {
      actualizarCarta(carta, { energia: 0 });
    } else {
      actualizarCarta(carta, { energia: cartaContexto[carta]?.energia + 1 });
    }
  };

  useEffect(() => {
    if (contexto.global) {
      if (contexto.daño) {
        const elementos = Array.from(document.querySelectorAll('[class*="2"]'));
        elementos.forEach((elemento) => {
          const i = parseInt(elemento.id);
          actualizarCarta(i, {
            vida: cartaContexto[i]?.vida - contexto.daño,
            efecto: `- ${contexto.daño}`,
          });
        });
      } else {
        const elementos = Array.from(document.querySelectorAll('[class*="0"]'));
        elementos.forEach((elemento) => {
          const i = parseInt(elemento.id);
          actualizarCarta(i, {
            vida: cartaContexto[i]?.vida + contexto.cura,
            efecto: `+ ${contexto.cura}`,
          });
        });
      }
      cambioEnergia(contexto.cartaSeleccionada);
      actualizarContexto({ turno: !contexto.turno, global: false });
    }
  }, [contexto.global]);

  useEffect(() => {
    if (contexto.contDerrotaPjs === 3) {
      setInterfazDerrota(true);
    } else if (contexto.contDerrotaOpn === 3) {
      setInterfazVictoria(true);
    }
  }, [contexto.contDerrotaPjs, contexto.contDerrotaOpn]);

  return (
    <div
      ref={bodyRef}
      className="body"
      style={{ backgroundColor: !contexto.turno ? "#7F8C8D" : "#BDC3C7" }}
    >
      <button
        title="Menu"
        className="button menuBtn"
        onClick={() => setShowMenu(!showMenu)}
      >
        <IoMenu />
      </button>
      {showMenu && (
        <div className="menu body">
          <h1>Menu</h1>
          <h2>Turnos: {contTurnos}</h2>
          <button className="button" onClick={() => navigate("/")}>
            Editar Mazo
          </button>
          <button className="button" onClick={() => window.location.reload()}>
            Reiniciar Partida
          </button>
          <button className="button" onClick={() => setShowMenu(false)}>
            Volver a la partida
          </button>
        </div>
      )}
      <DivCartas
        className="divEspOpnCss"
        lista={listOpnEsp}
        clickCarta={(carta) => setCartaEspSelec(carta)}
      />
      <DivCartas
        className="divOpnCss"
        lista={listaOpn}
        clickCarta={(carta) => setCartaPjSelec(carta)}
      />
      <DivCartas
        className="divPjsCss"
        lista={listaPjs}
        clickCarta={(carta) => setCartaPjSelec(carta)}
      />
      <DivCartas
        className="divEspCss"
        lista={listPjsEsp}
        clickCarta={(carta) => setCartaEspSelec(carta)}
      />
      {cartaPjSelec && <DivHabilidades carta={cartaPjSelec} />}
      {cartaEspSelec && contexto.cartaEspSeleccionada && (
        <DivInfoEsp carta={cartaEspSelec} />
      )}
      {interfazDerrota && (
        <div className="intRes">
          <h1>Derrota</h1>
          <h2>Vuelve a intentarlo o selecciona otra dificultad</h2>
          <button onClick={() => navigate("/")}>
            Ir a la pagina de inicio
          </button>
        </div>
      )}
      {interfazVictoria && (
        <div className="intRes">
          <h1>Victoria</h1>
          <h2>Tu puntuacion fue de: {contTurnos}</h2>
          <button onClick={() => navigate("/")}>
            Ir a la pagina de inicio
          </button>
        </div>
      )}
    </div>
  );
}

export default Principal;
