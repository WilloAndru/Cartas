import React, { useState, useContext } from 'react';
import { Context } from '../context/Context';

function DivHabilidades(props) {
  const { contexto, actualizarContexto } = useContext(Context);
  const [infoHabilidad, setInfoHabilidad] = useState(null);
  const { carta } = props;

  const ataqueBasicoInfo = {
    titulo: "Ataque Básico",
    descripcion1: "Daño: +2"
  };

  return (
    <div
      className="divHabilidades no-reset"
      style={{ backgroundColor: carta.backgroundColor }}
    >
      <h3>{carta.id}</h3>
      <div className='div'>
        <button
          onClick={() => actualizarContexto({ daño: 2 })}
          onMouseEnter={() => setInfoHabilidad(ataqueBasicoInfo)}
          onMouseLeave={() => setInfoHabilidad(null)}
        >
          <img src="ataqueBasico.png" alt="Ataque Básico" />
        </button>
        
        <button
          onClick={() => actualizarContexto({ daño: carta.boton2Info.daño })}
          onMouseEnter={() => setInfoHabilidad(carta.boton2Info)}
          onMouseLeave={() => setInfoHabilidad(null)}
          style={{ backgroundColor: carta.backgroundColorBoton }}
        >
          <img src={carta.imgBoton1} alt="Habilidad 2" />
        </button>
        
        <button
          onClick={() => actualizarContexto({ daño: carta.boton3Info.daño })}
          onMouseEnter={() => setInfoHabilidad(carta.boton3Info)}
          onMouseLeave={() => setInfoHabilidad(null)}
          className="ulti"
          style={{ 
            backgroundColor: contexto.activarUlti ? carta.backgroundColorBoton : "",
            pointerEvents: contexto.activarUlti ? "all" : "",
          }}
        >
          <img src={carta.imgBoton2} alt="Habilidad 3" />
        </button>
      </div>
      {infoHabilidad && (
        <div
          className='divInfoHabilidad'
          style={{ backgroundColor: `${infoHabilidad == ataqueBasicoInfo && carta.backgroundColorBoton}` }}
        >
          <h4>{infoHabilidad.titulo}</h4>
          <p>{infoHabilidad.descripcion1}</p>
          {infoHabilidad.descripcion2 && <p>{infoHabilidad.descripcion2}</p>}
        </div>
      )}
    </div>
  );
}

export default DivHabilidades;
