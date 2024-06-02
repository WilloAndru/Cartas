import React, { useState, useEffect, useContext } from 'react';
import Carta from './Carta'
import cartasEspeciales from './datas/cartasEspeciales'
import DivInfoEspeciales from './DivInfoEspeciales';
import { MyContextEsp } from './ContextEspeciales';

function DivEspeciales() {

  const [divInfo, setDivInfo] = useState(null);
  const {valueEsp, setDataEsp} = useContext(MyContextEsp);
  
  useEffect(() => {
    const handleKeyDown = (event) => {
        if (event.key === 'Escape') {
            setDivInfo(false);
        }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
        window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const selectCard = (especial) => {
    setDivInfo(especial)
    setDataEsp(especial.id, "auto", true)
  }

  const cartasEspecialesLista = cartasEspeciales.slice(0, 4).map(especial => (
    <Carta
        key={especial.id} 
        img={especial.img}
        display={valueEsp[especial?.id]?.display}
        onClick={() => selectCard(especial)}
    />
  ));
  return (
    <div id='divEspeciales'>
      {valueEsp.estado && divInfo && <DivInfoEspeciales
        titulo={divInfo.id}
        descripcion={divInfo.descripcion}
        onClickBoton={divInfo.onClickBoton}
      />}
      {cartasEspecialesLista}
    </div>
  )
}

export default DivEspeciales