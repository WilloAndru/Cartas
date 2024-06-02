import React from 'react'

function DivInfoHabilidad(props) {
  return (
    <div 
      className='divInfoHabilidad'
      style={{
        backgroundColor:props.backgroundColor,
      }}
    >
      <h4>{props.botonInfo.titulo || "Ataque Basico"}</h4>
      <p>{props.botonInfo.descripcion1 || "Daño: +2"}</p>
      {props.botonInfo.descripcion2 && <p>{props.botonInfo.descripcion2}</p>}
    </div>
  )
}

export default DivInfoHabilidad