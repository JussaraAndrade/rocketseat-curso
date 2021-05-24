let idade;

const pessoa = {
    name: "Elton",
    age: 26
};

// desestruturando - tirando uma propriedade de dentro de objeto
({ age: idade } = pessoa)

console.log(idade);
// Resp: 26

//==================================================================
const fruits1 = ["banana", "pera", "uva"]

//rest...; restos
const [b, ...rest] = fruits1

console.log(rest)
// Resp: pera, uva

//==================================================================

function liquidificador([primeiro, ...rest]){
    console.log(rest.join("") + primeiro)
}

// const fruits = {
//     banana: "banana",
//     pera: "pera"
// }
liquidificador("Banana")
// Resp: a, n, a, n, a

