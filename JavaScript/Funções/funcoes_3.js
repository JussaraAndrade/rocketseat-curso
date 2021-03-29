// function scope
let subject

function  createThink() {
    subject = 'study'
}

console.log(subject)
createThink(subject)
console.log(subject)

// function hoisting
sayMyName();

 function sayMyName(){
    console.log('Mayk')
}