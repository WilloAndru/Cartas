import React, { useState, useEffect, useContext } from 'react';
import Carta from './Carta';
import personajes from './datas/personajes';
import DivHabilidades from './DivHabilidades';
import { volverEstado } from './functions/volverEstado';
import { MyContext } from './Context';
import { estadoPjs } from './functions/interfazAccionPjs';
import { curacion, energia } from './functions/interfazAccion';
import { MyContextEsp } from './ContextEspeciales';
import { listaMazo } from './mazo/listaMazo';

function DivPersonajes() {
    const [ selectedCharacter, setSelectedCharacter ] = useState(null);
    const { value, setData } = useContext(MyContext);
    const { valueEsp, setDataEsp } = useContext(MyContextEsp);

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === 'Escape') {
                volverEstado();
                setSelectedCharacter(null);
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    const selectCard = (character) => {
        setSelectedCharacter(character);
        volverEstado();
        if (estadoPjs.valor) {
            estadoPjs.valor = false; 
            setData(
                character.id,
                (value[character.id]?.vida || 10) + curacion.valor,
                value[character.id]?.imgSup || '',
                (value[character.id]?.energia || 0) + energia.valor,
                character.costoUlti,
                value[character.id]?.ultiActiva                
            )
            setDataEsp(valueEsp.id, "none", false)
            curacion.valor = 0
            energia.valor = 0
        } else {
            setData(
                [character.id],
                value[character.id]?.vida || 10,
                value[character.id]?.imgSup || '',
                value[character.id]?.energia || 0,
                character.costoUlti,
                value[character.id]?.ultiActiva
            );
        }
    };

    const characterCards = personajes.slice(0, 6).map((character) => {
        const coinciden = listaMazo.valor.includes(character.id);
        if (coinciden) {
          return (
            <Carta
              className="cartaPersonaje"
              key={character.id}
              imgSup={value[character.id]?.imgSup}
              img={character.img}
              backgroundColor={character.backgroundColor}
              vida={value[character.id]?.vida || 10}
              costoUlti={character.costoUlti}
              energia={value[character.id]?.energia}
              onClick={() => selectCard(character)}
            />
          );
        } else {
          return null;
        }
    });

    return (
        <div className='divCartas'>
            {characterCards}
            {selectedCharacter && (
                <DivHabilidades
                    nombre={selectedCharacter.id}
                    backgroundColor={selectedCharacter.backgroundColor}
                    imgBoton1={selectedCharacter.imgBoton1}
                    imgBoton2={selectedCharacter.imgBoton2}
                    backgroundColorBoton={selectedCharacter.backgroundColorBoton}
                    onClick1={selectedCharacter.onClickBoton1}
                    onClick2={selectedCharacter.onClickBoton2}
                    onClick3={selectedCharacter.onClickBoton3}
                    boton2Info={selectedCharacter.boton2Info}
                    boton3Info={selectedCharacter.boton3Info}
                />
            )}
        </div>
    );
}

export default DivPersonajes;

