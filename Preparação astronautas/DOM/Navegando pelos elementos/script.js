// Navegando pelos elementos
// childNodes children

const el = document.querySelector('body')

// firstChild - considera o espaço vazio
console.log(el.firstChild)

//firstElementChild - não vai considerar o espaços vazios
console.log(el.firstElementChild)

// lastChild 
console.log(el.lastChild)

// lastElementChild
console.log(el.lastElementChild)