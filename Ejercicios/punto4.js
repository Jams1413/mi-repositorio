/*Ejercicio No 4
Dada una lista de números enteros, imprima cuál es la suma de los números al cuadrado.
Jhon Anderson Martinez*/


//Declara el modo estricto como buena practica de programación
"use strict"

// en este ejercicio a diferencia del anterior se declara el arreglo
let numeros = [1,2,3,4,-4,0,5];


let resultado=0;

/* Se itera las posiciones del arreglo para elevarlas mediante la funcion
Math y sumarlas al resultado*/
for (let i=0;i<numeros.length;i++){

    resultado = resultado + (Math.pow(numeros[i],2));
}

//Se imprime el resultado
console.log('La suma de los numeros al cuadrado es: ',resultado);