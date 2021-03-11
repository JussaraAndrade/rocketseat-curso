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


// Operadores de atribuição (Assignment)
let x

console.log(x)

// assignment
x = 1
console.log(x)

// addition assignment
// x = x + 2
x += 2
console.log(x)

// subtraction assignment
// x = x - 1
x -= 1
console.log(x)

// multiplication assignment
// x = x * 2
x *= 2
console.log(x)

// division assignment
// x = x / 2
x /= 2
console.log(x)

// remainder, exponetiation
//x1 %= 2
x **=2
console.log(x)


//Operadores lógicos (logical operators)

// - 2 valores booleanos, quando verificados,
// resultará em verdadeiro ou falso

let pao = true
let queijo = true

// AND &&
console.log(pao && queijo)// Dois valores tem que ser true, caso nenhum dos dois seja true o resutlado será falso

// OR ||
console.log(pao || queijo)// Qualquer um que for verdadeiro sempre da true, quando os dois for falso o resultado será falso.

// NOT ! - negar ele acaba trocando de valor 
console.log(!pao)// o pão era true, e o valor tá sendo trocado para false.


// Operador Condicional (Ternário)

// Dependendo da condição, nós receberemos valores diferentes

//Condição então valor 1 se não valor 2
// condition ? value1 : value2

// Exemplos
//Café da manhã top
let pao_1 = true
let queijo_1 = true

const niceBreakfast = pao_1 || queijo_1 ? 'Café top' : 'Café ruim'

console.log(niceBreakfast)

// Maior de 18
let age = 17
const canDrive = age >= 18 ? 'can drive' : "can't drive"
console.log(canDrive)


//Operador de String (String operator)

//comparison (comparação)
console.log('a' == 'b')// false
console.log('a' == 'a')// true

//concatenation (concatenação)
//Retorna a união de duas Strings
let alpha = 'alpha'
console.log(alpha + 'bet' + 's')
console.log(alpha += 'bet')

alpha += 'bet'
console.log(alpha + 345)





