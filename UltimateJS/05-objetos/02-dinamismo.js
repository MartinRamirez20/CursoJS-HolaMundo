const user = {id: 1};

user.name = 'Pedro';
user.guardar = function ( ) {
    console.log('Guardando', user.name);
}

user.guardar();

delete user.name;
delete user.guardar;

console.log(user)
// Despues de borrar 'name' y la funcion 'guardar' veremos como aparece solo el 'id'.


const user1 = Object.freeze({id:1});

const user2 = Object.seal({id:1});