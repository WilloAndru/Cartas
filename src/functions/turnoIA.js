import personajes from "../data/personajes";

export const turnoIA = (contexto, actualizarContexto, cartaContexto, actualizarCarta) => {  
  const idCartaSeleccionada = Math.floor(Math.random() * 3);
  const cartaSeleccionada = document.getElementById(idCartaSeleccionada);
  setTimeout(() => cartaSeleccionada.click(), 500)

  const carta = personajes[idCartaSeleccionada];
  const habilidaes = [{ daño: 2, esUlti: false}, { daño: carta.boton2Info.daño, esUlti: false }, { daño: carta.boton3Info.daño, esUlti: true }];
  const habilidad = habilidaes[Math.floor(Math.random() * 2)];
  actualizarContexto({ daño: habilidad.daño, esUlti: habilidad.esUlti });

  const idCartaAtacar = (Math.floor(Math.random() * 3) + 3);
  const cartaAtacar = document.getElementById(idCartaAtacar);  
  setTimeout(() => cartaAtacar.click(), 1000);

  setTimeout(() => (actualizarContexto({ turno: true, daño: null })), 1500);
};