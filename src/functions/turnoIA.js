import cartasEspeciales from "../data/cartasEspeciales";
import personajes from "../data/personajes";

export const turnoIA = (actualizarContexto) => {
  let cartaInicial = 0;
  let cartaEspecial = 0;
  let cartaFinal = 0;
  let esGlobal = false;
  let contador = 0;
  let cantidadEspeciales = 0;

  //filtrar especiales
  setTimeout(() => {
    const listaEsp = Array.from(document.querySelectorAll('[class*="3"]'));
    const carta2 = listaEsp.filter(e => e.className.includes('Carta'));
    const curaciones = listaEsp.filter(e => e.className.includes('Curacion'));
    const energias = listaEsp.filter(e => e.className.includes('Energia'));
    //seleccionar carta+2
    if (carta2.length > 0) {
      carta2.forEach(c => {
        c.click();
        actualizarContexto({ darCarta: true });
      });
    }
  }, contador + 500);

  //seleccion especial
  for (let i = 0; i < cantidadEspeciales; i++) {
    setTimeout(() => {
      cartaEspecial = 16 + i
      const cartaSeleccionada = document.getElementById(cartaEspecial);
      const className = cartaSeleccionada.getAttribute('class');
      const carta = cartasEspeciales.find(p => className.includes(p.name));
      cartaSeleccionada.click();
      actualizarContexto({ cura: carta.cura || 0, energia: carta.energia || 0 });
    }, contador + 500)
    //seleccion carta para buffear
    setTimeout(() => {
      cartaInicial = 13
      const cartaSeleccionada = document.getElementById(cartaInicial);
      cartaSeleccionada.click();
    }, contador + 1000)
    contador += 500;
  }

  //seleccion carta
  setTimeout(() => {
    cartaInicial = 13
    const cartaSeleccionada = document.getElementById(cartaInicial);
    cartaSeleccionada.click();
  }, contador + 1500)

  //seleccion habilidad
  setTimeout(() => {
    const cartaSeleccionada = document.getElementById(cartaInicial);
    const className = cartaSeleccionada.getAttribute('class');
    const carta = personajes.find(p => className.includes(p.name));
    const habilidades = [
      { daño: carta.boton2Info.daño, cura: carta.boton2Info.cura, global: carta.boton2Info.global, esUlti: false },
      { daño: carta.boton3Info.daño, cura: carta.boton3Info.cura, global: carta.boton3Info.global, esUlti: true }
    ];
    const habilidad = habilidades[0];
    cartaFinal = document.getElementById(habilidad.daño ? 0 : 14);
    esGlobal = habilidad.global ? true : false;
    actualizarContexto({ daño: habilidad.daño, cura: habilidad.cura, global: habilidad.global, esUlti: habilidad.esUlti });
  }, contador + 2000)

  //seleccion oponente o aliado final
  setTimeout(() => {
    if (!esGlobal) {
      cartaFinal.click();
    }
  }, contador + 2500);
};