import { estado } from "./interfazAccion";

const volverEstado = () => {
    estado.valor = false;
    document.getElementById("body").style.backgroundColor = "#f3e5ab";
}

export { volverEstado };