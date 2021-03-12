//Estrutura de repetição
// for
// break - para a execução do loop
// continue - pula a execução do momento


for(let i = 1; i < 10; i++){
    console.log('De 1 a 9: ' +i)
}

for(let i = 0; i < 10; i++){
    console.log('De 0 a 9: ' +i)
}

for(let i = 100; i > 0; i--){
    if(i === 50){
        break;
    }
    console.log(i)
}

for(let i = 10; i > 0; i--){
    if(i === 5){
        continue;
    }
    console.log(i)
}

