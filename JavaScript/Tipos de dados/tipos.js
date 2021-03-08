/*
    String

    * Cadeia de caracteres

    "" //aspas duplas
    '' //aspas simples
    `` //template literals ou template strings

*/

console.log('Mayk');

// Interpolação
console.log(`Mayk ${1 + 1}`);

/*
    Number

    * números
    33 //inteiros (positivos/negativos)
    12.5 // reais - float
    NaN // Not a Number
    Infinity //infinito

*/

console.log(33);
console.log(12.5 + 12);
console.log(12.5 / 12);
console.log(12.5 / 'asfd');
console.log(Infinity);





/*
    Boolean

        * somente 2 valores
            true //verdadeiro
            false // falso
*/
console.log(true);
console.log(false);








/*

    * underfined
        * indefinido (não irá existir)
    
    * null
        * nulo
        * objeto que não possui nada dentro
        * diferente de indefinido

*/

console.log(undefined);
console.log(null);








/*
    * Object
        * Objeto - estruturas 
        * Propriedades (cor, tamanho, altura, peso) / Atributos
        * Funcinalidades / Métodos
    
    { propriedade: "valor" }

*/

console.log({
    name: "Mayk",
    idade: 36,
    andar: function(){
        console.log('andar')
    }
})





/*
    * Array (Vetores)
        * Uma lista
        * Agrupamento de dado
        
    ["Mayk", 36]

*/

console.log([
    "Leite", 
    "Ovos",
    2,
    3
])






