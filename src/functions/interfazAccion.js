let estado = { valor: false };
let cartas = []
let daño = { valor: 2 };
let curacion = { valor: 0 };
let energia = { valor: 0 };
let elemento = { valor: "" };
let imbuir = { valor: "" };
let resetUlti = { valor: false };

const interfazAccion = () => {
    resetUlti.valor = false;
    elemento.valor = undefined;
    imbuir.valor = false;
    daño.valor = 2;
    curacion.valor = 0;
    estado.valor = true;
    document.getElementById("body").style.backgroundColor = "#dbce9a";
    cartas = document.querySelectorAll(".cartaOponentes");
    cartas.forEach(i => {
        i.classList.add("cartaOponentesHover")
    });
}

export { estado, interfazAccion, cartas, daño, curacion, energia, elemento, imbuir, resetUlti };