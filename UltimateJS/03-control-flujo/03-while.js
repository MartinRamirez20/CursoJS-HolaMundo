//Imprimir hasta 10 los numeros pares con while
let i = 0;
while(i <= 10){
    console.log('vamos en el numero ',i);
    i+=2;
}

//Usando modulo mezclando condicionales.
let contador = 0;
while (contador <= 20) {
    if (contador % 2 === 0) {
        console.log(contador, 'Es par')
    } else {
        console.log(contador, 'es impar')
    }
    contador++;
}
console.log('While terminado')