// Eventos
const h1 = document.querySelector('h1');

//Recomendada
h1.addEventListener('click', print)

function print(){
    console.log('print')
}

h1.addEventListener('click', function(){
    console.log('outro momento')
})