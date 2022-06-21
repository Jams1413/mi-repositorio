/*Ejercicio No 7
Dada una palabra, imprima el conjunto de de anagramas, que se pueden realizar con la palabra.
Jhon Anderson Martinez*/
"use strict"

let palabra = ['a','m','o','r']


let anagramas=[]

//Funcion que almacena las posibles combinaciones del arreglo en otro arreglo
let permutar = (a, permutacion = []) => {
    if ( ! a.length) {
        anagramas.push(permutacion);
        return;
    }

//Itera las posiciones del arreglo concatenando nuevas palabras 
    for (let i in a) {
        let actual = a.slice();
        let sig = actual.splice(i, 1);
  
        permutar(actual, permutacion.concat(sig));
    }
}

//Llama la funcion y le pasa la palabra como parametro
permutar(palabra);

//Imprime el nuevo arreglo 
console.log("Los posibles anagramas son: ")
console.log(anagramas);



