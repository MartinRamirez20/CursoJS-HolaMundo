function mayor_menor (a,b) {
    if (a < b) {
        return 'el numero mayor es: ' + b;
    } else if (a > b) {
        return 'el numero mayor es: ' + a;
    } else {
        return 'ambos numeros son iguales ' + a + ' es igual que ' + b;
    }
}

let resultado1 = mayor_menor(10,4);
let resultado2 = mayor_menor(2,4);
let resultado3 = mayor_menor(0,0);

console.log(resultado1);
console.log(resultado2);
console.log(resultado3);

//Nota importante
/**
 * En el return debemos usar '+' en vez de ',' para concatenar otra variable (agregar varios valores a la impresión)
 * Si colocaramos la ',' solo imprimiria el ultimo numero.
 * Si agregamos el '+' imprime todo el texto junto con la variable.
 */


//Solucion con operador ternario

function mayor_menor_ternario (a,b) {
    return (a > b) ? a : b;
}

let resultado_ternario1 = mayor_menor_ternario(1,2);
let resultado_ternario2 = mayor_menor_ternario(10,2);

console.log(resultado_ternario1);
console.log(resultado_ternario2);