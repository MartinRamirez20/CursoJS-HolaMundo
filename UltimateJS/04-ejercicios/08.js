let arreglo = [{
    id: 1,
    name: 'Juan',
}, {
    id: 2,
    name: 'Fernando',
}, {
    id: 3,
    name: 'Pedro',
}];

let arreglo_pares = [
    [1, {id:1, name:'Juan'}],
    [2, {id:2, name:'Fernando'}],
    [3, {id:3, name:'Pedro'}],
];

function array_pares (arreglo) {
    let nuevo_arreglo = [];
    for (let indice in arreglo) {
        let elemento = arreglo[indice];
        nuevo_arreglo[indice] = [elemento.id, elemento ]
    }
    return nuevo_arreglo
}

resultado = array_pares(arreglo);
console.log(resultado);