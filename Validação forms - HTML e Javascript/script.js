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

    let customMessage = (typeError) => {
        const messages = {
            text: {
                valueMissing: 'Por favor, preencha este campo'
            },
            email: {
                valueMissing: 'Email é obrigatório',
                typeMismatch: 'Por favor, preencha um email válido'
            }
        }

        return messages[field.type][typeError] 
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
        const error = verifyErrors()
        
        if(error) {
            const message = customMessage(error)

            field.style.borderColor = 'red'
            setCustomMessage(message)
       } else {
            field.style.borderColor = 'green'
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
    field.addEventListener('invalid', event => {
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