import React, { useState, useContext } from 'react';
import { Context } from '../context/Context';
import { GiEchoRipples, GiCrackedDisc, GiShardSword, GiWaterfall, GiFireTail, GiThrownSpear } from "react-icons/gi";
import { LiaWindSolid } from "react-icons/lia";
import { RiEarthquakeLine } from "react-icons/ri";
import { MdElectricBolt } from "react-icons/md";
import { IoWater } from "react-icons/io5";
import { FaMeteor, FaRegSnowflake } from "react-icons/fa";

function DivHabilidades(props) {
  const { contexto, actualizarContexto } = useContext(Context);
  const [infoHabilidad, setInfoHabilidad] = useState(null);
  const [rightBtn, setRightBtn] = useState(0);
  const { carta } = props;

  const getIcon = (type) => {
    switch (type) {
      case "anemo1":
        return <GiEchoRipples />;
      case "anemo2":
        return <LiaWindSolid />;
      case "geo1":
        return <RiEarthquakeLine />;
      case "geo2":
        return <GiCrackedDisc />;
      case "electro1":
        return <MdElectricBolt />;
      case "electro2":
        return <GiShardSword />;
      case "hydro1":
        return <IoWater />;
      case "hydro2":
        return <GiWaterfall />;
      case "pyro1":
        return <GiFireTail />;
      case "pyro2":
        return <FaMeteor />;
      case "cryo1":
        return <GiThrownSpear />;
      case "cryo2":
        return <FaRegSnowflake />;
    }
  };

  const handleGetPosition = (event, info) => {
    const element = event.target;
    const rect = element.getBoundingClientRect();
    setInfoHabilidad(info);
    setRightBtn(rect.right - rect.width/2);
  };

  const ataqueBasicoInfo = {
    titulo: "Ataque Básico",
    descripcion1: "Inflinge 2 de daño al oponente seleccionado"
  };

  return (
    <div
      className="divHabilidades no-reset"
      style={{ backgroundColor: carta.backgroundColor }}
    >
      <h3>{carta.name}</h3>
      <div className='div'>
        {/* 
        <button
          onClick={() => actualizarContexto({ daño: 2, cura: null, esUlti: false })}
          onMouseEnter={() => setInfoHabilidad(ataqueBasicoInfo)}
          onMouseLeave={() => setInfoHabilidad(null)}
        >
          <img src="ataqueBasico.png" alt="Ataque Básico" />
        </button>
        */}

        <button
          onClick={() => actualizarContexto({
            daño: carta.boton2Info.daño,
            cura: carta.boton2Info.cura,
            global: carta.boton2Info.global,
            esUlti: false
          })}
          onMouseEnter={(event) => handleGetPosition(event, carta.boton2Info)}
          onMouseLeave={(event) => handleGetPosition(event, null)}
          style={{ backgroundColor: carta.backgroundColorBoton }}
        >
          {getIcon(carta.imgBoton1)}
        </button>

        <button
          onClick={contexto.activarUlti ? (() => actualizarContexto({
            daño: carta.boton3Info.daño,
            cura: carta.boton3Info.cura,
            global: carta.boton3Info.global,
            esUlti: true
          })) : null}
          onMouseEnter={(event) => handleGetPosition(event, carta.boton3Info)}
          onMouseLeave={(event) => handleGetPosition(event, null)}
          className="ulti"
          style={{
            backgroundColor: contexto.activarUlti ? carta.backgroundColorBoton : "",
          }}
        >
          {getIcon(carta.imgBoton2)}
        </button>
      </div>
      {infoHabilidad && (
        <div
          className='divInfoHabilidad'
          style={{
            backgroundColor: infoHabilidad.titulo == "Ataque Básico" ? "" : carta.backgroundColorBoton,
            left: rightBtn - 120
          }}
        >
          <h4>{infoHabilidad.titulo}</h4>
          <p>{infoHabilidad.descripcion1}</p>
        </div>
      )}
    </div>
  );
}

export default DivHabilidades;
