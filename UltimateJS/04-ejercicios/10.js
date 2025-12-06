let longitud = 7;

function crearArray(n) {
    if (n <= 0) {
        return [];
    }
    let nuevo_array = [];
    for (let x = 0; x < n; x++) {
        nuevo_array[x] = x + 1;
    }
    return nuevo_array;
}

let resultado = crearArray(longitud);
console.log(resultado);