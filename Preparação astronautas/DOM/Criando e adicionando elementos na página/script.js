// Criando e adicionando elementos

// createElement
const div = document.createElement('div');
div.innerHTML = "Olá Devs!"

//append prepend
const body = document.querySelector('body')
//body.append(div)

//prepend - adiciona antes
body.prepend(div)