function idade(x){
    console.log(`Voce tem ${x} anos`)
}

idade(10);
let soma = (x,y) => x + y;
console.log(soma(10,10))

//numeros aleatorios com limite
function numeroMax(x){
    let y = Math.floor(Math.random() * x) + 1

    if(y <= x){
        console.log(Math.floor(y))
    }else{
        console.log("Passou do limite")
    }
}

numeroMax(5)

function tipoDados(x){
    if(typeof x == 'number'){
       return console.log(`${x} é um number`)
    }else if(typeof x  == 'string'){
        return console.log(`${x} é um string`)
    }else if(typeof x == 'boolean'){
        return console.log(`${x} é um boolean`)
    }

}

tipoDados(true)

function retornaPositivo(number){
    if(number < 0){
        let positivo = Math.abs(number)
        console.log(positivo)
    }
    
}

console.log(retornaPositivo(-20))

function contaCaracter(frase){
    if(frase.length > 10){
        console.log("Texto muito longo")
    }else{
        console.log("Dentro dos limites")
    }
}

console.log(contaCaracter('Ola mundo tem mais de 10 caracter'))

function potencia(base, potencia){
    resultado = Math.pow(base, potencia)
    console.log(resultado)
}

potencia(2,5)

function onlypar(num){
    for(let x = num; x >= 0; x--){
        if(x % 2 == 0){
            console.log(x)
        }
    }
}

onlypar(10)