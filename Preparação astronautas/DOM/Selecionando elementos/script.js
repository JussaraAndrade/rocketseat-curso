//querySelectorAll() - irá trazer uma coleção de nó

//Argumento pela classe
const element_1 = document.querySelectorAll('.one')

//Argumento pelo id
const element_2 = document.querySelectorAll('#two')

console.log(element_1)
console.log(element_2)

//Plural - elements
const elements_1 = document.querySelectorAll('#two')

elements_1.forEach(el => console.log(el))

const elements_2 = document.querySelectorAll('.one')

elements_2.forEach(el => console.log(el))