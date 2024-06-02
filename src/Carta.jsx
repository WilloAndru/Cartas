import React, { useState, useEffect, useContext } from 'react';
import "./Carta.css"
import { MyContext } from './Context';

function Carta(props) {
  
  const { value, setData } = useContext(MyContext);
  const [energia, setEnergia] = useState([false,false,false]);

  const cantidadEnergia = []
  for (let i = 0; i < props.costoUlti; i++) {
    cantidadEnergia.push(
      <div key={i} 
        style={{backgroundColor: energia[i] ? "dimgray" : ""}}
      >
      </div>
  )};

  useEffect(() => {
    value[value?.id]?.costoUlti <= props.energia ?
    setData(
      value.id, 
      value[value.id].vida,
      value[value.id].imgSup, 
      props.energia, 
      value[value.id].costoUlti, 
      true
    ) : ""
    if (props.energia === 1) {
      setEnergia([true,false,false])
    } else if (props.energia === 2) {
      setEnergia([true,true,false])
    } else if (props.energia === 3) {
      setEnergia([true,true,true])
    } else if (props.energia === 0) {
      setEnergia([false,false,false])
    }
  }, [props.energia]);
  
  return (
    <button className={"carta " + props.className}
      key={props.id}
      style={{
        display: props.display,
        backgroundColor: props.backgroundColor,
        borderColor: props.borderColor,
        pointerEvents: props.bloqueo
      }}
      onClick={props.onClick}
    >
      <img style={{display: props.display}} id='imgSup' src={props.imgSup}/>
      <h2 style={{display: props.display}}>{props.vida}</h2>
      <div style={{display: props.display}} className='conjunto'>
        {cantidadEnergia}
      </div>
      <img id='img' src={props.img}/>
    </button>
  )
}

export default Carta;