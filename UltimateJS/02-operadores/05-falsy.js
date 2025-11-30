let nombre = '';
let username = nombre || 'Anomimo'; //En caso de que usuario sea 'false' se guardara anonimo.
console.log(username); //Imprimira anonimo

let nombre2 = 'Pedro';
let username2 = nombre2 || 'Anomimo';
console.log(username2);


// Para mostrar esto mejor:
function fn1() {
    console.log('soy funcion 1');
    return false;
}

function fn2() {
    console.log('soy funcion 2');
    return true;
}

let x = fn1() && fn2(); //Si ambas funciones devuelven true se imprimiran ambas funciones.
//Si una funcion es false solo imprimira la funcion false.