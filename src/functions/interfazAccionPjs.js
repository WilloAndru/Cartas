let cartas = []
let estadoPjs = { valor: false }
const interfazAccionPjs = () => {
    estadoPjs.valor = true;
    document.getElementById("body").style.backgroundColor = "#dbce9a";
    cartas = document.querySelectorAll(".cartaOponentes");
    cartas.forEach(i => {
        i.classList.add("cartaOponentesHover")
    });
}

export { interfazAccionPjs, cartas, estadoPjs };