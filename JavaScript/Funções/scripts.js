/*
    Function() constructor

    * expressão new
    * criar um novo objeto
    * this keyword
*/

let date = new Date("2020-12-01");
console.log(date);

function Person(name) {
  //referencia; this
  //propriedade; name
  this.name = name;
  this.walk = function () {
    return this.name + " está andando";
  };
}

const mayk = new Person("Mayk");
const joao = new Person("Joao");
console.log(mayk.walk());
console.log(joao.walk());



