// Adicionando elementos

const div = document.createElement('div');
div.innerHTML = "Olá Devs!"

// insertBefore - não existe insertAfter
const body = document.querySelector('body')
const header = body.querySelector('header')

// Alternativa para simular insertAfter
body.insertBefore(div, header.nextSibling)