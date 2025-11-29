function suma(a,b) {
    return a + b
}

let resultado = suma(5,6);
console.log(resultado);


function suma2(a,b) {
    console.log(arguments);
    return a + b
}

let resultado2 = suma2(5,6,1,2,3);
console.log(resultado2);
console.log(typeof suma2)