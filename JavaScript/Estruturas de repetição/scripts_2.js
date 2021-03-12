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

