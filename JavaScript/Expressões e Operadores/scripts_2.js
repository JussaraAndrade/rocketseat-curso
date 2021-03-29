/*
    FALSY
    Quando um valor é considerado false em contextos onde
    um booleano é obrigatório (condicionais e loops)

    false
    0
    -0
    ""
    null
    undefiend
    NaN
*/

console.log(false ? 'verdadeiro' : 'falso')
console.log(0 ? 'verdadeiro' : 'falso')
console.log(-0 ? 'verdadeiro' : 'falso')
console.log("" ? 'verdadeiro' : 'falso')
console.log(null ? 'verdadeiro' : 'falso')
console.log(NaN ? 'verdadeiro' : 'falso')

/*
    TRUTHY
    Quando um valor é considerado true em contextos onde um 
    booleano é obrigatório (condicionais e loops)

    true
    {}
    []
    1
    3.23
    "0"
    "false"
    -1
    Infinity
    -Infinity

*/

console.log(true ? 'verdadeiro' : 'falso')
console.log({} ? 'verdadeiro' : 'falso')
console.log([] ? 'verdadeiro' : 'falso')
console.log(1 ? 'verdadeiro' : 'falso')
console.log(3.23 ? 'verdadeiro' : 'falso')
console.log("0" ? 'verdadeiro' : 'falso')
console.log("false" ? 'verdadeiro' : 'falso')
console.log(-1 ? 'verdadeiro' : 'falso')
console.log(Infinity ? 'verdadeiro' : 'falso')
console.log(- Infinity ? 'verdadeiro' : 'falso')


/* Operator precedence
    Precedência de operadores

* grouping                    ( )
* negação e incremento        ! ++ --
* multiplicação e divisão     * /
* adição e subtração          + -
* relacional                  < <= > >=
* igualdade                   == != === !==
* AND                         &&
* OR                          ||
* condicional                 ?:
* assignment (atribuição)     = += -= *=
*/

//Primeiro mutiplica, e depois soma: 5 * 10 = 50 + 2 = 52
console.log(2 + 5 * 10)

//Primeiro soma, e depois multiplica: 2 + 5 = 7 * 10 = 70
console.log((2 + 5) * 10)

console.log(3 > 2 && 2 > 1)