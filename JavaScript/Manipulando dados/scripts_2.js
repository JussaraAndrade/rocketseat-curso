// Manipulando Strings e Números

// Transformar String em Número e Número em String
let string = "123"
Number(string)

let number_1 = 321
String(number_1)

//Contar quantos caracteres tem uma palavra e quantos digitos tem um número
let word = "Paralelepipedo"
console.log(word.length)

let number_2 = 1234
console.log(String(number_2).length)

//Transformar um número quebrado com 2 casas deciamis e trocar ponto por vírgula
let number_3 = 654.6546543
//Troca o ponto por vírgula
console.log(number_3.toFixed(2).replace(".", ","))

//Transforme letras minúsculas em maiúsculas. Faça o contrário disso também

let word_2 = "Programar é muito bacana!"
let word_3 = "PROGRAMAR É MUITO BACANA!"
console.log(word_2.toUpperCase())
console.log(word_3.toLowerCase())