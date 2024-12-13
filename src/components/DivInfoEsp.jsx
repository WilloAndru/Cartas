import React from 'react'

function DivInfoEsp(props) {
  const { carta } = props;

  return (
    <div className='divInfoEsp no-reset'>
      <h3>{carta.id}</h3>
      <p>{carta.description}</p>
      <button
        onClick={props.clickBoton}
      >
        <b>Usar</b>
      </button>
    </div>
  )
}

export default DivInfoEsp