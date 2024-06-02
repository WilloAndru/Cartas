import React from 'react'

function DivInfoEspeciales(props) {

  return (
    <div
      id='divInfoEspeciales'
    >
      <h3>{props.titulo}</h3>
      <p>{props.descripcion}</p>
      <button
        onClick={props.onClickBoton}>
          Usar
      </button>
    </div>
  )
}

export default DivInfoEspeciales