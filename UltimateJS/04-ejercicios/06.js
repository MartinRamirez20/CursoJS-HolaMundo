let coleccion = [2, 5, 7, 15, -5, -100, 55];

function arreglo_positivo (coleccion) {
    let contador = 0;
    for (let positivo of coleccion) {
        if (positivo > 0) {
            contador++;
        }
    }
    return contador;
}

resultado = arreglo_positivo(coleccion);
console.log(resultado);