//Personaje de TV
let nombre = 'Tanjiro';
let anime = 'Demon Slayer';
let edad = 16;

//Objeto literal
let personaje = {nombre, anime, edad,};

let personaje_completo = {
    nombre:"Inosuke",
    anime:"Demon slayer",
    edad: 17,
}
console.log(personaje)

console.log(personaje_completo);
console.log(personaje_completo.nombre);
console.log(personaje_completo['anime']);

personaje.edad = 13;
personaje['nombre'] = 'Nezuko';

console.log(personaje)

delete personaje.anime
console.log(personaje)