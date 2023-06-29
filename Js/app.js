import { valida } from "./validaciones";

const inputs = documento.querySelectorAll("input")

inputs.forEach( input => {
    input.addEventListener("blur", (input) => {
        valida(input.target)
    });
});