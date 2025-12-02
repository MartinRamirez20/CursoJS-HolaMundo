let contador = 0;
do {
    if (contador % 2 === 0) {
        console.log(contador, 'Es par')
    } else {
        console.log(contador, 'es impar')
    }
    contador++;
} while (contador <= 20);

console.log('Do-while terminado')