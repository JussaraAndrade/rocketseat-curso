const fields = document.querySelectorAll('[required]')

// console.log(fields);

let customValidation = (event) => {

    // eliminar o bubble
    event.preventDefault()

    const field = event.target

    // logica para verificar se existem erros
    let verifyErrors = () => {
        let foundError = false;

        // for of; intera em uma lista 
        // for in; intera sobre elementos que estiver no objeto
        for(let error in field.validity) {
            // se não for customError
            // então verifica se tem erro
            if(field.validity[error] && !field.validity.valid) {
                foundError = error
            }
        }
        return foundError;
    }

     const error = verifyErrors()

     const spanError = field.parentNode.querySelector('span.error')
     
    if(error) {
        spanError.classList.add('active')
        spanError.innerHTML = "Campo obrigatório"
    } else {
       spanError.classList.remove('active')
       spanError.innerHTML = ''
    }
}

// para cada um field adicione o evento 
for( field of fields ) {
    field.addEventListener("invalid", customValidation)
    // blur; perde o focus
    field.addEventListener('blur', customValidation)
}

















document.querySelector('form')
.addEventListener("submit", event => {
    console.log("enviar o formulário");
    
    // não vai enviar o formulário
    event.preventDefault()
})