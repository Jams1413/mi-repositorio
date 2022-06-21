/*Ejercicio No 3
Dada una lista de números enteros, imprima cuál es el menor de los números de la lista.
Jhon Anderson Martinez*/

//Declara el modo estricto como buena practica de programación
"use strict" 

//Ingresa los numeros mediante una variable que los guarda como String
let numeros = "-5,50,100,1,-430,2,100,-10,2,-50";

/*Mediante el metodo split guarda en un array 
 los numeros que estan separados por una ',' */ 
numeros = numeros.split(',');
let resultado=0;

/*Guarda en la variable resultado la primera posición del arreglo
y lo convierte de String a Int*/ 
resultado=parseInt(numeros[0],10);

//Itera las posiciones del arreglo y la compara con el numero menor guardado
for (let i=0;i<numeros.length;i++){

    if (parseInt(numeros[i],10)<=resultado){
        resultado=parseInt(numeros[i],10);
    }
}

//Imprime el numero menor ingresado
console.log('El numero menor es: ',resultado);

