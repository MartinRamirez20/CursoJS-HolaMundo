function Usuario(nombre) {
    this.nombre = nombre;
}

console.log(Usuario.name); //Devolera el nombre de la funcion
console.log(Usuario.length);

const nuevoUsuario = Usuario;
let user = new nuevoUsuario('Fernando');
console.log(user)

//Argumentos a otras funciones.
function of(funcion, argumento) {
    return new Usuario(argumento);
}
let usuario1 = of(Usuario, 'Martin');
console.log(usuario1);


//Funciones retornadas.
function returned() {
    return function() {
        console.log('Hola mundo');
    }
}

let saludo = returned();
saludo();