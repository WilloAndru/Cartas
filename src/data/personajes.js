const personajes = [
    {
        id: "Anemo",
        img: "Anemo.png",
        backgroundColor: "#5bb59c",
        imgBoton1: "hydro1.png",
        imgBoton2: "hydro2.png",
        backgroundColorBoton: "#72e2c3",
        costoUlti: 3,
        boton2Info: {
            cura: 3,
            titulo: "Eco de las Alturas",
            descripcion1: "Cura 3 de vida al personaje seleccionado",
        },
        boton3Info: {
            cura: 2,
            global: true,
            titulo: "Bendición del Monzón",
            descripcion1: "Cura 2 de vida a todos los personajes",
        },
    },
    {
        id: "Anemo Asesino",
        img: "Anemo.png",
        backgroundColor: "#5bb59c",
        imgBoton1: "hydro1.png",
        imgBoton2: "hydro2.png",
        backgroundColorBoton: "#72e2c3",
        costoUlti: 2,
        boton2Info: {
            daño: 3,
            titulo: "Lanza de Viento",
            descripcion1: "Inflinge 3 de daño al oponente seleccionado",
        },
        boton3Info: {
            daño: 5,
            titulo: "Filo Huracanado",
            descripcion1: "Inflinge 5 de daño al oponente seleccionado",
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
        boton2Info: {
            daño: 1,
            global: true,
            titulo: "Golpe Sísmico",
            descripcion1: "Inflinge 1 de daño a todos los oponentes",
        },
        boton3Info: {
            daño: 2,
            global: true,
            titulo: "Ruptura del Abismo",
            descripcion1: "Inflinge 2 de daño a todos los oponentes",
        },
    },
    {
        id: "Electro",
        img: "Electro.png",
        backgroundColor: "#753d8e",
        imgBoton1: "hydro1.png",
        imgBoton2: "hydro2.png",
        backgroundColorBoton: "#a757cb",
        costoUlti: 3,
        boton2Info: {
            daño: 3,
            global: true,
            titulo: "Descarga Eléctrica",
            descripcion1: "Inflinge 1 de daño a todos los oponentes",
        },
        boton3Info: {
            daño: 6,
            titulo: "Espada del Relámpago",
            descripcion1: "Inflinge 6 de daño al oponente seleccionado",
        },
    },
    {
        id: "Hydro",
        img: "Hydro.png",
        backgroundColor: "#179ea5",
        imgBoton1: "hydro1.png",
        imgBoton2: "hydro2.png",
        backgroundColorBoton: "#21e1eb",
        costoUlti: 2,
        boton2Info: {
            cura: 1,
            global: true,
            titulo: "Flujo Restaurador",
            descripcion1: "Cura 1 de vida a todos los personajes",
        },
        boton3Info: {
            cura: 5,
            titulo: "Lagrima del Rio",
            descripcion1: "Cura 5 de vida al personaje seleccionado",
        },
    },
    {
        id: "Pyro",
        img: "Pyro.png",
        backgroundColor: "#cb754a",
        imgBoton1: "pyro1.png",
        imgBoton2: "pyro2.png",
        backgroundColorBoton: "#fe925d",
        costoUlti: 2,
        boton2Info: {
            daño: 3,
            titulo: "Chispa Mortal",
            descripcion1: "Inflinge 3 de daño al oponente seleccionado",
        },
        boton3Info: {
            daño: 5,
            titulo: "Bola de Fuego",
            descripcion1: "Inflinge 3 de daño al oponente seleccionado",
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
        boton2Info: {
            daño: 3,
            titulo: "Lanza de Hielo",
            descripcion1: "Inglinge 3 de daño al oponente seleccionado"
        },
        boton3Info: {
            cura: 5,
            titulo: "Brisa Revitalizante",
            descripcion1: "Cura 5 de vida al personaje seleccionado"
        },
    }
];

export default personajes;