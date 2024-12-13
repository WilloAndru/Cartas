
const cartasEspeciales = [
    {
        id: "Curacion",
        img: "corazon.png",
        description: "Cura 1 de vida al pj seleccionado",
        onClickBoton: () => {
            interfazAccionPjs()
            curacion.valor = 1;
        }
    },
    {
        id: "Curacion +2",
        img: "corazon+2.png",
        description: "Cura 2 de vida al pj seleccionado",
        onClickBoton: () => {
            interfazAccionPjs()
            curacion.valor = 2;
        }
    },
    {
        id: "Energia",
        img: "dado.png",
        description: "Gana 1 de energia el pj seleccionado",
        onClickBoton: () => {
            interfazAccionPjs()
            energia.valor = 1;
        }
    },
    {
        id: "Energia+2",
        img: "dado+2.png",
        description: "Gana 2 de energia el pj seleccionado",
        onClickBoton: () => {
            interfazAccionPjs()
            energia.valor = 2;
        }
    },
    {
        id: "Cambio Rapido",
        img: "turnoRapido.png",
        description: "Permite hacer un cambio sin gastar un turno",
        onClickBoton: () => {
            interfazAccionPjs()
        }
    },
]

export default cartasEspeciales;