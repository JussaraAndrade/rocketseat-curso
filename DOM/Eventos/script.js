// Eventos
// argumento event
const input = document.querySelector('input');

// onkeyup, onclick, etc.
input.onkeydown = function(event){
    console.log(event.currentTarget.value)
}