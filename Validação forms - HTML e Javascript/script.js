const fields = document.querySelectorAll('[required]')

let ValidateField = (field) => {
    // verifyErros; está isolada dentro de outra função
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

    let setCustomMessage = (message) => {
        const spanError = field.parentNode.querySelector('span.error')
        if(message) {
            spanError.classList.add('active')
            spanError.innerHTML = message
        } else {
            spanError.classList.remove('active')
            spanError.innerHTML = ''
        }

        
    }

    return () => {
    
        if(verifyErrors()) {
            setCustomMessage("Campo Obrigatório")
       } else {
            setCustomMessage()
       }
    }
}

let customValidation = (event) => {

    const field = event.target
    const validation = ValidateField(field)

    validation()
    
}

// para cada um field adicione o evento 
for( field of fields ) {
    field.addEventListener("invalid", event => {
        // eliminar o bubble
        event.preventDefault()
        
        customValidation(event)
    })
    // blur; perde o focus
    field.addEventListener('blur', customValidation)
}

















document.querySelector('form')
.addEventListener("submit", event => {
    console.log("enviar o formulário");
    
    // não vai enviar o formulário
    event.preventDefault()
})