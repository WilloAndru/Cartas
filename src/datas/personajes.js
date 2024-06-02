import { interfazAccion, daño, curacion, elemento, imbuir, resetUlti } from "../functions/interfazAccion";

const personajes = [
    {
        id: "Anemo",
        img: "Anemo.png",
        backgroundColor: "#5bb59c",
        imgBoton1: "hydro1.png",
        imgBoton2: "hydro2.png",
        backgroundColorBoton: "#72e2c3",
        costoUlti: 2,
        onClickBoton1: interfazAccion,
        onClickBoton2: () => {
            interfazAccion()
            daño.valor = 3;
            elemento.valor = "Anemo.png"
            imbuir.valor = true
        },
        onClickBoton3: () => {
            interfazAccion()
            resetUlti.valor = true
            elemento.valor = "Anemo.png"
            daño.valor = 2;
            curacion.valor = 4;
        },
        boton2Info: {
            titulo: "Sombrero",
            descripcion1: "Daño Anemo: +3",
        },
        boton3Info: {
            titulo: "Estrella",
            descripcion1: "Curacion: +4",
            descripcion2: "Daño Anemo: +2"
        },
    },
    {
        id: "Geo",
        img: "Geo.png",
        backgroundColor: "#b68f35",
        imgBoton1: "hydro1.png",
        imgBoton2: "hydro2.png",
        backgroundColorBoton: "#e3b342",
        costoUlti: 3,
        onClickBoton1: interfazAccion,
        onClickBoton2: () => {
            interfazAccion()
            daño.valor = 3;
            elemento.valor = "Geo.png"
            imbuir.valor = true
        },
        onClickBoton3: () => {
            interfazAccion()
            resetUlti.valor = true
            elemento.valor = "Geo.png"
            daño.valor = 2;
            curacion.valor = 4;
        },
        boton2Info: {
            titulo: "Sombrero",
            descripcion1: "Daño Geo: +3",
        },
        boton3Info: {
            titulo: "Estrella",
            descripcion1: "Curacion: +4",
            descripcion2: "Daño Geo: +2"
        },
    },
    {
        id: "Electro",
        img: "Electro.png",
        backgroundColor: "#753d8e",
        imgBoton1: "hydro1.png",
        imgBoton2: "hydro2.png",
        backgroundColorBoton: "#a757cb",
        costoUlti: 2,
        onClickBoton1: interfazAccion,
        onClickBoton2: () => {
            interfazAccion()
            daño.valor = 3;
            elemento.valor = "Electro.png"
            imbuir.valor = true
        },
        onClickBoton3: () => {
            interfazAccion()
            resetUlti.valor = true
            elemento.valor = "Electro.png"
            daño.valor = 2;
            curacion.valor = 4;
        },
        boton2Info: {
            titulo: "Sombrero",
            descripcion1: "Daño Electro: +3",
        },
        boton3Info: {
            titulo: "Estrella",
            descripcion1: "Curacion: +4",
            descripcion2: "Daño Electro: +2"
        },
    },
    {
        id: "Hydro",
        img: "Hydro.png",
        backgroundColor: "#179ea5",
        imgBoton1: "hydro1.png",
        imgBoton2: "hydro2.png",
        backgroundColorBoton: "#21e1eb",
        costoUlti: 3,
        onClickBoton1: interfazAccion,
        onClickBoton2: () => {
            interfazAccion()
            daño.valor = 3;
            elemento.valor = "Hydro.png"
            imbuir.valor = true
        },
        onClickBoton3: () => {
            interfazAccion()
            resetUlti.valor = true
            elemento.valor = "Hydro.png"
            daño.valor = 2;
            curacion.valor = 4;
        },
        boton2Info: {
            titulo: "Sombrero",
            descripcion1: "Daño Hydro: +3",
        },
        boton3Info: {
            titulo: "Estrella",
            descripcion1: "Curacion: +4",
            descripcion2: "Daño Hydro: +2"
        },
    },
    {
        id: "Pyro",
        img: "Pyro.png",
        backgroundColor: "#cb754a",
        imgBoton1: "pyro1.png",
        imgBoton2: "pyro2.png",
        backgroundColorBoton: "#fe925d",
        costoUlti: 3,
        onClickBoton1: interfazAccion,
        onClickBoton2: () => {
            interfazAccion()
            daño.valor = 3;
            elemento.valor = "Pyro.png"
        },
        onClickBoton3: () => {
            interfazAccion()
            resetUlti.valor = true
            daño.valor = 4;
            curacion.valor = 2;
            elemento.valor = "Pyro.png"
        },
        boton2Info: {
            titulo: "Mariposa",
            descripcion1: "Daño Pyro: +3",
        },
        boton3Info: {
            titulo: "Fantasma",
            descripcion1: "Daño Pyro: +4",
            descripcion2: "Curacion: +2"
        },
    },
    {
        id: "Cryo",
        img: "Cryo.png",
        backgroundColor: "#80bab7",
        imgBoton1: "cryo1.png",
        imgBoton2: "cryo2.png",
        backgroundColorBoton: "#a0e9e5",
        costoUlti: 2,
        onClickBoton1: interfazAccion,
        onClickBoton2: () => {
            interfazAccion()
            daño.valor = 2;
            elemento.valor = "Cryo.png"
        },
        onClickBoton3: () => {
            interfazAccion()
            resetUlti.valor = true
            daño.valor = 4;
            elemento.valor = "Cryo.png"
        },
        boton2Info: {
            titulo: "Corte",
            descripcion1: "Daño Cryo: +2"
        },
        boton3Info: {
            titulo: "Ultimatum",
            descripcion1: "Daño Cryo: +6"
        },
    }
];

export default personajes;