// for...of

let name = 'Mayk'
let names = ['João', 'Paulo', 'Pedro']

for(let char of name){
    console.log(char)
}

//let name é dentro do escopo, não irá interferir outros atributos.
for(let name of names){
    console.log(name)
}


// for...in

let person = {
    name: 'John',
    age: 30,
    weight: 88.6
}

for(property in person){
    console.log(property)
    console.log('Name: ' +person.name)
    console.log('Age: ' +person["age"])
    console.log(`Weight: ${person.weight}`)
}