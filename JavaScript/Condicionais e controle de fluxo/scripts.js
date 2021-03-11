// Control flow

//Executada linha a linha
console.log('a')
console.log('b')

//se estiver sujo
console.log('lavar o copo')

//se não estiver sujo
console.log('servir café')


// if...else - muda o fluxo 

//Modelo 1:
let temperature = 38

if(temperature >= 37){
    console.log('Febre')
}else{
    console.log('Saudável')
}

if(temperature >= 37.5){
    console.log('Febre alta')
}else if(temperature < 37.5 && temperature >= 37){
    console.log('Febre moderada')
}else{
    console.log('Saudável')
}

//Modelo 2:

let temperature_1 = 36.9
let highTemperature_1 = temperature_1 >= 37.5
let mediumTemperature_1 = temperature_1 >= 37.5 && temperature_1 >= 37

if(highTemperature_1){
    console.log('Febre alta')
}else if(mediumTemperature_1){
    console.log('Febre moderada')
} else {
    console.log('Saudável')
}


