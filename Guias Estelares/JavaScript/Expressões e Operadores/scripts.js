/* Expressões e Operadores

- Expressions
- Operators
    Binary
    Unary 
    Ternary
*/

let number = 1;

(function(){
    console.log('alo')
})

console.log(number + 1)
console.log(++number)
console.log(--number)
console.log(typeof number)
console.log(true ? 'alo' : 'nada')
console.log(false ? 'alo' : 'nada')


/*
    new

    * left-hand-side expression
    * criar um novo objeto
*/

let name = new String('Mayk')
name.surName = "Brito"
let age = new Number(23)
console.log(name.surName, age)

let date = new Date('2020-12-01')
console.log(date.__proto__)


/*
    Operadores unários
    typeof
    delete
*/
const person = {
    name: 'Mayk', 
    age: 25,
}

delete person.age
console.log(person)

console.log(typeof "mayk")