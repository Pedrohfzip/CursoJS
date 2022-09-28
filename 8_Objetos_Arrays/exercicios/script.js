//let array = [1,2,3,4,5]
//console.log(array[0],array[2],array[3])

//let array1 = [1,2]
//let array2 = [1,2,3,4]
//console.log(array1.length,array2.length)

/*
let onibus = {
    rodas: 8,
    passageiros: 40,
    portas: 2,
}
console.log(onibus.rodas,onibus.passageiros,onibus.portas)

onibus.janelas = 20

console.log(onibus.janelas)

delete onibus.rodas

console.log(onibus.rodas)
*/

/*
let array = ["Joao", "Pedro", "Marcelo"]
    for(let i = 0; i <= array.length;i++){
        if(array[i] == "Pedro"){
            console.log(`O nome pedro esta na posição ${i}`)
        }
    }
*/

/*
let array1 = [1,2,3,4,5,6,7]
let array2 = [1,2,3]
let array3 = [1,2,3,4,5]

function verificaArray(array){
    if(array.length > 5){
        console.log("Muitos argumentos")
    }else if(array.length < 5){
        console.log("Poucos argumentos")
    }else{
        console.log("Quantidade Legal")
    }
}

verificaArray(array1)
verificaArray(array2)
verificaArray(array3)
*/

/*
let array = [1,2,3,4,5]
for(let i = 0; i < array.length;i++){
    console.log(array[i])
}
*/

/*
let json = {
    "name": "Pedro",
    "idade": 20
}

const {name: lname, idade: lidade} = json

console.log(lname)
console.log(lidade)
*/
/*
let frase = "Oi eu sou uma frase, vou virar um array"

frase.split(``)

for(let i = 0; i < frase.length;i++){
    console.log(`${frase[i]}`)
}
*/

/*
let calculadora = {
    somar(num1,num2){
        result = num1 + num2
        console.log(`${num1} + ${num2} = ${result}`)
    },
    subtrair(num1,num2){
        result = num1 - num2
        console.log(`${num1} - ${num2} = ${result}`)
    },
    multiplicar(num1,num2){
        result = num1 * num2
        console.log(`${num1} * ${num2} = ${result}`)
    },
    dividir(num1,num2){
        result = num1 / num2
        console.log(`${num1} / ${num2} = ${result}`)
    }
}

console.log(
    calculadora.somar(10,10),
    calculadora.subtrair(10,10),
    calculadora.multiplicar(10,10),
    calculadora.dividir(10,10),

)
*/