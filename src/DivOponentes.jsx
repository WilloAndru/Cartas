import { useState, useContext } from 'react';
import Carta from './Carta';
import { estado, daño, curacion, elemento, imbuir, resetUlti } from './functions/interfazAccion';
import { volverEstado } from './functions/volverEstado';
import { MyContext } from './Context';
import { reaccionElemental, elementoFinal, vidaFinal } from './functions/reaccionElemental';
import personajes from './datas/personajes';
import { listaMazo } from './mazo/listaMazo';

function DivOponentes() {

    const [vidaCarta, setVidasCartas] = useState({});
    const { value, setData } = useContext(MyContext);

    const cambiarVida = (idCarta, elemento, daño, estado, imbuir) => {
      if (estado) {
      setVidasCartas(prev => {
        volverEstado()
        imbuir ? setData(
          value.id, 
          value[value.id].vida,
          elemento, 
          value[value.id].energia + 1, 
          value[value.id].costoUlti
        ) : setData(
          value.id, 
          value[value.id].vida,
          value[value.id].imgSup, 
          value[value.id].energia + 1, 
          value[value.id].costoUlti
        )
        curacion.valor ? setData(
          value.id,
          value[value.id].vida + curacion.valor, 
          elemento, 
          value[value.id].energia + 1, 
          value[value.id].costoUlti
        ) : ""
        resetUlti.valor ? setData(
          value.id,
          value[value.id].vida, 
          elemento, 
          0, 
          value[value.id].costoUlti
        ) : "";
        
        const historial = { ...prev };
        reaccionElemental(historial[idCarta]?.elemento, elemento,(historial[idCarta]?.vida || 10), daño)
        historial[idCarta] = {
          elemento: elementoFinal.valor,
          vida: vidaFinal.valor,
          bloqueo: "auto"
        };
        if (historial[idCarta].vida <= 0) {
          historial[idCarta].vida = 0;
          historial[idCarta].bloqueo = "none";
        }
        return historial;
    })}};

    const oponentesLista = personajes.slice(0, 6).map((v) => {
      const coinciden = listaMazo.valor.includes(v.id);
      if (!coinciden) {
        return (
          <Carta 
            key={v.id} 
            imgSup={vidaCarta[v.id]?.elemento || ""}
            img={vidaCarta[v.id]?.bloqueo === "none" ? "x.png" : v.img} 
            vida={vidaCarta[v.id]?.vida === 0 ? 0 : (vidaCarta[v.id]?.vida || 10)}
            bloqueo={vidaCarta[v.id]?.bloqueo || "auto"}
            backgroundColor={v.backgroundColor}
            costoUlti={v.costoUlti}
            onClick={() => cambiarVida(
              v.id,
              elemento.valor, 
              daño.valor, 
              estado.valor,
              imbuir.valor
            )}
          />
        )} else {
          return null;
    }});

    return (
      <div className='divCartas'>
        {oponentesLista}
      </div>
    );
}

export default DivOponentes