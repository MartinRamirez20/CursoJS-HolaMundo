console.log(1 | 3); // Esto imprimira 3
/** Explicacion:
 * Toma la cadena de bit y creara un nuevo bit en base a si uno de esos digitos tiene un 1 en esa cadena
 * 1 = 00000001
 * 3 = 00000011
 * 
 * Comprobando los ultimos digitos podemos ver que en ambos numeros hay un 1 al final,
 * lo que guardara un uno,}
 * en el indice sexto del numero 3 podremos ver un 1 tambien,
 * lo que guardara otro uno,
 * dando como resultado un 00000011 lo que se traduce de binario a decimal como un 3.
 * Es pore eso que imprime un 3 como resultado.
 */

console.log(1 | 4); // imprime 5 (00000101)
// 00000001 = 1
// 00000100 = 4 
// 00000101 = 5 (Resultado)


console.log(1 & 3) // imprime 1
// 00000001 = 1
// 00000011 = 3
// 00000001 = 1 (Resultado)