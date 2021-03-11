// Operadores Aritiméticos

// multiplicação *
console.log(3 * 5)
console.log(3.2 * 5)
console.log(3.2 * 5.5)

// divisão /
console.log(12 / 2)

// soma +
console.log(34 + 67)

// subtração -
console.log(34 - 23)

// resto da divisão %
let remainder
remainder = 11 % 10
console.log(remainder)

// incremento ++
let increment = 0
increment++
console.log(increment)

// decremento --
let decrement = 0
decrement--
console.log(decrement)

// exponencial **
console.log(3 ** 2)

//Grouping operator ( )

//Primeiro soma 3 * 5, depois + 2: 15 + 2 = 17
let total_1 = 2 + 3 * 5
console.log(total_1)

//Trocar ordem de precedência: Primeiro soma (2 + 3), depois * 5: 5 * 5 = 25
let total_2 = (2 + 3) * 5
console.log(total_2) 


//Operadores de comparação

//Irá comparar valores e retornar um Boolean como resposta à comparação

let one = 1
let two = 2

// = recebe
let name =  'João'

// == igual
console.log(one == 1) // true
console.log(one == "1") //true

// != diferente
console.log(one != two) //true
console.log(one != 1) //false
console.log(one != "1") //false

// === estritamente igual (verifica se o tipo é igual, não o valor)
console.log(one === "1") //false
console.log(one === 1)//true

// !== estritamente diferente
console.log(two !== "2")// true
console.log(two !== 2)// false

// > Maior
console.log(one > two)//false

// >= Maior ou igual
console.log(one >= 1)//true
console.log(two >= 1)//true

// < Menor
console.log(one < two)// true

// <= Menor ou igual
console.log(one <= two)//true
console.log(one <= 1)//true
console.log(one <= 0)//false




