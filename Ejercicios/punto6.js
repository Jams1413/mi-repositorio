/*Ejercicio No 6
Dada una lista de números enteros, imprima un diccionario con el número de repeticiones para cada número en la lista.
Jhon Anderson Martinez*/

//Declara el modo estricto como buena practica de programación
"use strict" 

//Ingresa los numeros mediante una variable que los guarda como String
let numeros = "-5553,50,100,1,-430,2,100,-10,2,-50";
let num=0;

/*Itera para recorrer cada una de las posiciones del string y compararla
 con los digitos numericos*/
for (let i=0 ; i<=9 ; i++){
    for (let j=0 ; j<=numeros.length ; j++){
        //pasa de Int a string para comparar los digitos
        if (numeros[j]==String(i)){
            num++;
        }
    }
    //Imprime el numero y las veces que se repite 
    console.log('El numero ',i,' se repite ',num,' veces');
    num=0;
}
