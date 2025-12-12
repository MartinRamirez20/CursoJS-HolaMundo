let a = 1;
let b = a;

b++;
console.log(a,b);

let obj1 = {};
let obj2 = obj1;

obj2.prop = 1;
console.log(obj1, obj2);


let prueba = 1;
function suma(n) {
    n++;
}
suma(prueba);
console.log(prueba);
//Explicacion en el archivo 'Readme.md' en la seccion de 'Valor y referencia'

let prueba2 = {prop:1};
function suma2(prueba2) {
    prueba2.prop++;
}
suma2(prueba2);
console.log(prueba2)
