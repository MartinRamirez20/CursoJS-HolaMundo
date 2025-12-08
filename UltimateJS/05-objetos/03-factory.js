function crearUsuario(name, email) {
    return {
        email: email,
        name, //Igual que linea 4, pero resumido.
        activo: true,
        recuperarClave: function () {
            console.log('Recuperando clave...');
        },
    };
}

let user1 = crearUsuario('Pedro','correo@example.com');
let user2 = crearUsuario('Juan','juan@example.com');

console.log(user1);
console.log(user2);