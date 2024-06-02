let elementoFinal = { valor: "" }
let vidaFinal = { valor: 0 }

const reaccionElemental = (elemento1, elemento2, vida, daño) => {
    
    elementoFinal.valor = ""
    vidaFinal.valor = vida - daño

    if ((elemento1 && !elemento2) || (!elemento1 && elemento2)) {
        elementoFinal.valor = elemento1 ? elemento1 : elemento2;
    } else if (elemento1 && elemento2) {
        if (elemento1 === elemento2) {
            elementoFinal.valor = elemento1
        } else if ((elemento1 === "Hydro.png" && elemento2 === "Pyro.png") || (elemento2 === "Hydro.png" && elemento1 === "Pyro.png")) {
            vidaFinal.valor -= 2
        } else if ((elemento1 === "Hydro.png" && elemento2 === "Cryo.png") || (elemento2 === "Hydro.png" && elemento1 === "Cryo.png")) {
            vidaFinal.valor -= 1
        } else if ((elemento1 === "Cryo.png" && elemento2 === "Pyro.png") || (elemento2 === "Cryo.png" && elemento1 === "Pyro.png")) {
            vidaFinal.valor -= 2
        }
    }
}

export {reaccionElemental, elementoFinal, vidaFinal} ;