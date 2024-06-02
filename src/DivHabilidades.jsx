import React, {useContext} from 'react'
import "./DivHabilidades.css"
import BotonHabilidad from './BotonHabilidad';
import { MyContext } from './Context';

function DivHabilidades(props) {

  const { value, setData } = useContext(MyContext);

  return (
    <div 
      className='divHabilidades'
      style={{ backgroundColor: props.backgroundColor }}
    >
      <h3>{props.nombre}</h3>
      <div>
        <BotonHabilidad
          imgBoton="ataqueBasico.png"
          onClick={props.onClick1}
        />
        <BotonHabilidad
          backgroundColorBoton={props.backgroundColorBoton}
          imgBoton={props.imgBoton1}
          onClick={props.onClick2}
          info={props.boton2Info}
        />
        <BotonHabilidad
          id={value[value.id]?.ultiActiva ? "ultiActiva" : "ulti"}
          backgroundColorBoton={value[value.id]?.ultiActiva && props.backgroundColorBoton}
          imgBoton={props.imgBoton2}
          onClick={value[value.id]?.ultiActiva && props.onClick3}
          info={props.boton3Info}
        />
      </div>
    </div>
  );
}

export default DivHabilidades