arreglo_autos = ['Mazda', 'BMW', 'Audi', 'Volkswagen', 'Renault'];

function elemento_array (indice) {
    if (indice > arreglo_autos.length || indice < 0) {
        return 'Indice no valido.';
    } else {
        return arreglo_autos[indice];
    }
}

let resultado = elemento_array(0);
console.log(resultado);

// Creando el arreglo desde la funcion
function arreglo_funcion (arreglo, indice) {
    if (indice < 0 || arreglo.length <= indice) {
        return 'Elemento no existe';
    }
    return arreglo[indice];
}

let resultado2 = arreglo_funcion([1,2,3],0);
console.log(resultado2);