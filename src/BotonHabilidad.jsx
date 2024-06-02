import { useState } from 'react'
import DivInfoHabilidad from './DivInfoHabilidad'

function BotonHabilidad(props) {
    
    const [showInfo, setShowInfo] = useState(false);

    return (
        <button 
            id={props.id} 
            style={{ backgroundColor: props.backgroundColorBoton }}
            onClick={props.onClick}
            onMouseEnter={() => setShowInfo(true)}
            onMouseLeave={() => setShowInfo(false)}
        >
            <img src={props.imgBoton}/>
            {showInfo && 
                <DivInfoHabilidad
                    backgroundColor={props.backgroundColorBoton}
                    botonInfo={props.info || ""}
                />
            }
        </button>
    )
}

export default BotonHabilidad