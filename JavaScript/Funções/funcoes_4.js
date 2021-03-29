//arrow function
const sayMyName_1 = (name) => {
    console.log(name)
}

sayMyName_1('Mayk')

//callback function
function sayMyName_2(name){
    console.log('antes de executar a função callback')

    name()

    console.log('depois de executar a callback')
}

sayMyName_2(
    () => {
        console.log('estou em um callback')
    }
)