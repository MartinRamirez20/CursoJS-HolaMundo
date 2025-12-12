//Definimos un objeto 'punto' con las propiedades 'x', 'y' y  el metodo 'dibujar'
const punto = {
    x:10,
    y:15,
    dibujar: function() {
        console.log('dibujando');
    }
};

//Tambien podemos definir metodos de la siguiente manera
// dibujar() {}

// delete punto.dibujar;
if ('dibujar' in punto) {
    punto.dibujar();
} //Podemos ver si un objeto tiene alguna propiedad o metodo en particular.

console.log(Object.keys(punto));
// Podemos ver que nos devolvera un array con las propiedades de este objeto.
// Asi podemos acceder a listar los valores de todas las propiedades de este objeto.


for (let llave of Object.keys(punto)) {
    console.log(llave, punto[llave]);
}

for (let entry of Object.entries(punto)) {
    console.log(entry);
}//Nos servira para poder acceder a las propiedades de un objeto cuando no las conocemos.
//Aunque esto tambien lo podemos hacer con:
for (let llave in punto) {
    console.log(llave);
} //Esta funcionalidad es nueva, asi que es posible que nos aparezca codigo viejo con la manera de arriba.