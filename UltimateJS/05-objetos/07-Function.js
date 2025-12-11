function Punto(x, y) {
    this.x = x;
    this.y = y;
    this.dibujar = function() {console.log('Dibujando...');}
    return this;
}

let punto = { z:7 }; // Con esto y la llamada a la funcion en 'p' es como si agregaramos otra propiedad a la funcion 'Punto'.
// Es como si definirieramos 'this.z = z;'
//Punto.call(punto, 1, 2); //Este metodo hace que pasemos 'punto' a la funcion de 'Punto'.

Punto.apply(punto, [1, 2]);
console.log(punto);

//Usando el constructor de 'function'
// const Point = new Function('x', 'y', `
//    this.x = x;
//    this.y = y;
//    this.dibujar = function() {console.log('Dibujando...');}
//`   );

//const p = new Punto(1, 2);
//console.log(p);
