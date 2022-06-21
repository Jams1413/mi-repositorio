/*Ejercicio No 5
Dada una lista de números enteros, ordene e imprima la lista de menor a mayor.
Jhon Anderson Martinez*/

//Declara el modo estricto como buena practica de programación
"use strict" 

//Ingresa los numeros mediante una variable que los guarda como String
let numeros = "-5,50,100,1,-430,2,100,-10,2,-50";

/*Mediante el metodo split guarda en un array 
 los numeros que estan separados por una ',' */ 

let orden=[];
orden = numeros.split(',');

/*Itera las posiciones del arreglo y compara los ultimos indices 
intercambiando posiciones, el metodo parseInt convierte los datos de String a Int*/
for (let i=0;i<orden.length;i++){
    for (let j=orden.length;j>=i;j--){
        if (parseInt(orden[j-1],10)>parseInt(orden[j],10)){
            let x = parseInt(orden[j-1],10);
            orden[j-1] = parseInt(orden[j],10);
            orden[j] = x;
        }
    }
}

//Imprime la cadena original
console.log('Cadena sin ordenar: ',numeros);
//Imprime el arreglo ordenado
console.log('Cadena ordenada: ',orden);


