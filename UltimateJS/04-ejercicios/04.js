// Usando for

let numeros = 10;
for (let contador=0;contador<numeros;contador++) {
    if (contador % 2 === 0) {
        continue;
    }
    console.log(contador, 'con for');
}


// Usando While
//Usando la variable 'numeros'

contador2 = 0; 
while (contador2 <= numeros) {
    if (contador2 % 2 === 1) {
        console.log(contador2, 'con while');
    }
    contador2++;
}


// Manera poco convencional

let numero = 11;
for (let contador3=1;contador3<numero;contador3+=2) {
    console.log(contador3, 'idea poco convencional');
}

//Tambien existe una manera y es haciendolo con el operador de comparador '!=='