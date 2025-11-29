# Aprende JavaScript Ahora! curso completo desde cero para principiantes
## CURSO DE 4 HORAS - HolaMundo
28/11/2025

## Temario
- Tipos basicos
- Operadores
- Control de flujo
- Objetos
- Arrays
- Funciones
- Prototipos
- Herencias con prototipos
- Clases ES6
- Manipulacion del DOM
- Asincronía
  - Ajax
  - Promesas
  - APIs
- Herramientas de empaquetado
- 50 Ejercicios y Proyectos


## Como tomar el curso
Ver el video completo, asi resolveremos dudas. Si tenemos dudas escribirlas.


## Introduccion
Veremos 3 cosas
- ¿Que es JavaScript?
  Es uno de los programas de programacion más populares actualemente, podemos trabajar como desarrollador web o Frontend, tambien podemos trabajar como Backend o Fullstack.
  Ademas podemos ser desarrollador moviles, tanto como Android o Ios.
  Pódemos realizar Apps de escritorio y podemos trabajar tambien sobre microcontroladores.

- FRAMEWORKS Y LIBRERIAS:
  VUE, Angular, React (La libreria de JS mas popoular y mas usada actualmente)
  Un Frameworks nos entrega muchas herramientas para que podamos desarrollar aplicaciones complejas.
  Una libreria se encarga de solucionar un problema en especifico, aunque tambien es una herramienta, sin embargo, el Framework nos dara mas herramientas.

- ¿Que es ECMAScript?
  Cuando se creo JS se hizo para crearse dentro de los exploradores web con la funcionalidad de hacer las paginas no estaticas. ECMA 262 (ECMAScript) indica los estandares para los lenguajes de programación JS JScript y tmb de ActionScript.
  La version del 2015 (ECMAScript 2015) Se introdujeron funcionalidades como 'let' y 'const', tambien introdujeron las 'fet arrow functions' y supuestas 'clases'.
  JavaScript se escribio para los navegadores web, por ende en la actualidad todos los navegadores tienen un motor que corre este lenguaje. El de Chrome es V8, el cual es de codigo abierto.
  Gracias al trabajo de Ryan Dahl podemos correr JS en cualquier lado, con un codigo escrito en C++ el cual se llama Node.js.


## Herramientas usadas
- Visual Studio Code: Instalaremos extensiones como 'live server'
- Node.js (Podemos descargarlo mas adelante en el curso)
- Google Chrome, ya que es el usado en el curso y facilita la experiencia.

## Primera aplicacion
### Creacion carpeta 'UltimateJS'
Cada vez que ejecutamos una pagina web los exploradores tomaran el codigo desde arriba hacia abajo, el cual sera descargado.
Es por eso que si colocamos un <Script></Script> muy grande en el <head></head>, se vera una pagina en blanco, ya que primero cargara las funcionalidades antes que el contenido en HTML y CSS.
Si colocamos nuestro Script al final permitiremos que se cargue correctamente el contenido de la pagina.
Sin embargo existen EXCEPCIONES, donde algunas librerias nos indicaran que coloquemos los Scripts dentro de head.

Creacion app.js
Al construir una APP escribiremos muchas lineas de codigo, asi que es mejor escribimos nuestros scripts en un archivo aparte.
<Refactorizar: Cambiar la estructura interna sin alterar el comportamiento externo.>
   

## Variables
Es una caja que va a tener informacion y que podemos referenciar en un futuro.
Cada PC tiene su RAM, las variables las almacenamos en bloques de memorias y las podemos consultar desde la RAM con el nombre de la variable creada.

Para definir variables usamos 'let' sin embargo antes se usaba 'var'.
El termino 'undefined' nos dice que se ha creado una variable pero que no ha sido definida.

### Reglas creacion variables
Si queremos crear una variable tiene que comenzar con letras o _, si se inicia con un numero nos dara error.
Las variables no pueden ser nombradas igual que una palabra reservada.

### Convenciones para crear variables
- UpperCamelCase: La primera letra de cada palabra que usemos sera mayuscula, si despues hay otra palabra dentro tambien tendra que comenzar con mayuscula, y asi con una tercera.
- camelCase: Cada palabra tendra que comenzar con mayuscula a excepcion de la primera 
- snake_case: Cada palabra sera separada por un '_'.

JS es case sensitive.

Si queremos asignar un valor a una variable ya creada no hace falta volver a usar la palabra 'let'.
Podemos tambien definir mas de una variable en una misma linea con el uso de , separando cada palabra.

Nombrar variables con sentido, para asi saber como lo usamos y en donde.


# Tipos de Datos
Existen 2 tipos:
PRIMITIVOS: Cuando los buscamos encontramos el dato en el bloque asignado
- Number
- String
- Boolean
- Undefined
- Null
DE REFERENCIA: Cuando los vayamos a buscar tendremos que saltar a otro bloque de memoria.
- Array
- Object
- Functions
- Class
   
El OS se encarga de asignarle secciones a la memoria RAM, al tipo de memoria que no se puede expandir y es rapida se le denomina STACK, los tipos de datos primitivos se guardan aca.
La memoria HEAP es dinamica, podemos asignarle mas memoria segun las necesidades del OS, aqui se guardan los tipos de datos de referencias, es un poco mas lenta.
Cuando vamos a consultar los tipos de datos de referencia veremos una direccion en la memoria, es como una refencia, de ahi viene su nombre.


29/11/2025
   
El punto y coma en JS es opcional, sin embargo es bueno colocarlo.


## Tipos de datos Primitivos
- Numeros: No se tiene que usar comillas simples ni dobles.
- Strings: Se usan comillas o dobles.
- Booleans: Verdaderos o falsos, definidos con 'true' o 'false'.
- Undefined: No definido, ya que no se les da un valor al declararla o cuando le declaramos 'undefined' a la variable.
- Null: Ocurre cuando queremos dejar una variable explicitamente con valor nulo. Se puede usar cuando el usuario seleccione ninguna opcion.

Nosotros podemos cambiar los contenidos de las variables, siempre y cuando sean declaradas con let.
Para volverla a declarar no hace falta volver a usar la palabra let.

### CONSTANTES
Para asgurarnos de que los valores de las variables no vayan a cambiar podemos usar 'const'.
Deberiamos casi nunca cambiar el valor de una variable, asi que deberiamos usar la mayoria de las veces 'const', sin embargo necesitamos explicitamente hacer cambios a esa variable debemos usar 'let'.

### TIPADO DINAMICO
Existen los lenguajes de tipado estatico y tipado dinamico.
Al hablar de tipado estatico al declarar una varible le indicamos inmediatamente cual sera su tipo de dato.
  string nombre = "Hola;
El tipado dinamico no hace falta declararle el tipo.
  nombre = "Hola;
  nombre = 42;
Y esto no nos dara error.
Java por ejemplo es Estatico, y JS es dinamico.

Podemos usar 'typeof' para ver el tipo de dato que contiene una variable o una constante.
El typeof de 'null' da 'object', debido a que null = 0, lo que es representado como un puntero 0x00, a lo que podriamos llamar el objeto (0x00). Null representa un objeto vacio o la ausencia de un objeto.


## Comentarios
   En JS usamos '//' para realizar comentarios.
   Podemos usarlos antes de una linea o despues de una linea con codigo.
   Estos no se veran en nuestro navegador.
   Para un comentario largo usamos /** */
   La manera oficial es escribir comentarios largos es dentro de /* Aqui va comentario */.
   Los comentarios se usan para explicar la razon del codigo o el objetivo al cual queramos llegar.


## Tipos de datos de Referencia
### OBJETOS
Son como deciamos, de REFERENCIA, se guardan como una direccion en donde se guarda el objeto en nuestra memoria.
Estos son una grupacion de datos que hacen sentido tenerlos juntos.
Por ejemplo un lapiz tiene color, longitud y peso.

Para definir el objeto usamos '{}', a esto se le conoce como objeto literal.
Para agregar datos al objeto podemos colocar las variables ya asignadas, o tambien podemos colocar variable:valor.
Los datos colocados dentro de los objetos son llamados 'propiedades', compuestas por 'clave' o 'llave' y 'valor'.

DATO IMPORTANTE: En nuestro objeto a la hora de modificar la ultima propiedad deberiamos agregar una ','
Ya que en los sistemas de control de versiones (git) nos dira que se modifican 2 lineas en caso de no tener la ','.

JS no asegura el orden de las propiedades.

Para acceder unicamente a una propiedad y no al todo el objeto usamos:
objeto.nombre_propiedad
O con la notacion de []:
objeto['propiedad'], siempre se debe indicar como un string.

Para modificar una propiedad:
objeto.propiedad = 13;
O:
objeto['edad'] = 16;

Es mas utilizada esta convencion 'objeto.propiedad'

Para eliminar una propiedad:
   podemos usar la palabra reservada 'delete'.
   delete objeto.propiedad


### ARRAYS
Arrays que signfica coleccion tambien suelen ser llamados arreglos.

Para declarar un array literal usamos:
let coleccion = ['a', 'b'];
   
Este a diferencia de los objetos respeta el orden asignado.
Podemos inspeccionarlos y ver que sus elementos inician con 0 (indice)
Tambien podemos pasarle al array un nuevo indice para declarar un nuevo valor.
  coleccion[2] = 'c';
Tambien podemos saltarnos este orden y declarar un valor en el indice [15], esto no dara error pero si aumentara la longitud del array y dejara los valores del indice 3 al 14 en 'empty' o 'undefined'.

Si usamos 'typeof' para ver el tipo nos daremos cuenta que es 'object'.
Como los arrays dentro de JS se comportan como objetos podemos acceder a las propiedades de estos.
  coleccion.length
Nos dara la longitud del array.


### FUNCIONES
Son bloques fundamentales dentro de la construccion de aplicaciones.
Son como procedimientos o un listado de instrucciones.
Se usan con la palabra reservada function seguida por su nombre y ()
  function nombre() {}
Para ejecutar la funcion tenemos que llamarla, lo cual se hace:
  nombre();
   
Estas funciones las podemos usar para por ejemplo calcular valores:
  function suma() {
    return 2 + 2;
  }
La palabra reservada 'return' nos permite reutilizar codigo dentro de las funciones, devolviendonos en este caso el valor calculado para usarlo en un futuro.
  let resultado = suma();
  console.log(resultado);


### Argumentos y parametros
Podemos asignarles parametros a una funcion para ser usados despues.
Ejemplo:
  function suma(a) {
    return a + 2;
  }

Para definir 'a' usamos un argumento
Ejemplo:
  let resultado = suma(5);
  console.log(resultado);

Las funciones pueden recibir multiples argumentos y multiples parametros.
Ejemplo:
  function suma(a,b) {
    return a + 2;
  }
  let resultado = suma(5,6);
  console.log(resultado);

Si quisieramos referenciar mas argumentos en nuestra funcion suma podemos usar la palabra reservada 'arguments'.
Sin embargo esta no es la forma recomendada.



# Declaraciones y expresiones
En JS existen 3 conceptos:
- Expression (expresión): Es cualquier linea de codigo o porcion que evalue en un valor. Tambien tenemos las asignaciones como 'x = 4'. Tambien podemos hacer llamados a funciones. Cada vez que el codigo hace algo y podemos obtener un valor de este estamos ante una 'expression'.
- Declarations (declaración, de forma oral): Es cuando creamos algo que vamos a referenciar en un futuro. Para eso usamos 'let', 'const', 'function*' y 'async function*', 'class', 'export' e 'import'.
- Statement (declaración, de forma escrita): Instrucciones como 'it', 'for', 'else' o 'switch'.

En resumen, algo que usemos vayamos a usar en un futuro son 'declaration' si no 'statement'.
Si no se le puede hacer un 'console.log' es una declaracion.
Ejemplo:
  console.log(var);
Pero si de lo contrario, si podemos imprimirlo entonces es una expresion.



# Operadores
Nos serviran para crear expresiones y con estas crear algoritmos, los cuales nos solucionaran problemas
Veremos operadores aritmeticos, de asignación, comparación, lógicos y de Bitwise.

## Operadores aritmeticos
Los usamos para realizar operaciones matematicas.
Ejemplo:
  let a = 5;
  let b = 7;
  Estos son declaration.

  console.log(a + b);
  Esto es una expresion.

Operadores:
- +: Suma.
- -: Resta.
- *: Multiplicación.
- /: Division.
- %: Modulo (Es lo que sobra de una division. Si la division es exacta imprimirá 0)
- **: Potenciación.

Operador incrementacion y decrementacion:
Se puede colocar antes y despues de la variable
- ++a: Incrementara el valor de a en 1. (6)
- a++: Imprimira el valor de a y luego le sumara 1.
- --a: Decrementara el valor de a en 1.
- a--: Imprimira el valor de a y luego le restara 1.


## Operadores de asignación
Podemos reasignar valores a una variable como hemos visto anteriormente.
Ejemplo:
  let a = 5;

  Si queremos sumarle un valor a esa misma variable podemos usar.
  a = a + 5;
  O en su expresion resumida:
  a += 5;

Asi mismo podemos usarlos con los diferentes operadores aritmeticos.
- a -= 5;
- a *= 5;
- a /= 5;
- a %= 5;
- a **= 5;


## Operadores de comparación
Se utilizan para poder comparar distintas variables entre si, o una variable con otra cosa.
Ejemplo:
  let a = 10;
  console.log(a > 5); Imprimira 'true'.

Cada vez que usemos estos operadores nos devolvera un boolean, 'true' o ' false'.
Asi mismo podemos usar:
- '>': Mayor.
- '<': menor.
- '>=': mayor o igual que.
- '<=': menor o igual que.
- a == 10: Comprueba si a es igual a 10.
- a != 10: Comprueba de a es diferente 10.

En este ejemplo sabemos que 'a' es un numero, mas especificamente 10. Que pasa si hacemos lo siguiente.

console.log(a == '10');

Como podemos ver aqui comparamos un 10 (numero) con un '10' (string). Esto imprime true debido a que el == solo confirma si los valores son iguales, no averigua si los tipos son iguales.
Para confirmar el tipo podemos hacer:

console.log(a === '10');

Lo cual imprimirá 'false'.
Resumiendo: Sabiendo que a = 10.
- a === '10': Comprueba el tipo e imprime false, ya que un int no es lo mismo que un string.
- a !== '10': Comprueba el tipo e imprime true, ya que en efecto no son iguales.


## Operadores lógicos
Aqui tenemos 'AND', 'OR' Y 'NOT'
- AND: &&