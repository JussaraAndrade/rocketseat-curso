// Manipulando Strings 

// Verficar se o texto contém a palavra Amor

let phrase = "Eu quero viver o Amor!"
console.log(phrase.includes("Amor"))



//Manipulando String e Arrays

/* 
Separe um texto que contem espaços, em um novo array onde cada texto é uma posição do array.
Depois disso, transforme o array em um texto onde eram espaços, coloque _
*/

let phrase_1 = "Eu quero viver o Amor!"
let myArray = phrase_1.split(" ")
//join; juntar
let phraseWithUnderscore = myArray.join("_")
console.log(myArray)
console.log(phraseWithUnderscore.toLowerCase())



//Manipulando Arrays

//Criar Array com construtor
let myArray_1 = new Array('a', 'b', 'c')
console.log(myArray_1)

let myArray_2 = new Array(10)
console.log(myArray_2)