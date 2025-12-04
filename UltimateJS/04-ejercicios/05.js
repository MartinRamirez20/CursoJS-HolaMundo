let arreglo = [2, 5, 7, 15, -5, -100, 55];

function mayor_menor (arr) {
    let menor = arr[0];
    let mayor = arr[0];
    for (numero of arr) {
        menor = menor < numero ? menor : numero;
        mayor = mayor > numero ? mayor : numero;
    }
    return [menor, mayor]
}

let numeros = mayor_menor(arreglo);
console.log(numeros);