let pairs =[
    [1, {name:'Elver'}],
    [2, {name:'Karen'}],
    [3, {name:'Adrian'}],
];

function arreglo_objeto (arreglo) {
    let nuevo_arreglo = [];
    for (let indice in arreglo) {
        let elemento = arreglo[indice];
        nuevo_arreglo[indice] = elemento[1];
        nuevo_arreglo.id = elemento[0];
    }
    return nuevo_arreglo;
}

resultado = arreglo_objeto(pairs);
console.log(resultado);