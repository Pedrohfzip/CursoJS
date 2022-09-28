//Arrays

let numeros = [1,2,3,4,5,6,7,8,9,10]

console.log(numeros.slice(2,-3))
let palavra = "OI"
let informacoes = ["Pedro", 12, true,1,2,4,"Bola","Quadrado"]
let frase = `12345`

//propriedades 

console.log(numeros[numeros.length - 1])


console.log(palavra.toLocaleLowerCase())


for(let i = 0; i <= numeros.length; i++){
    console.log(numeros[i])
}
/*
console.log(numeros)
console.log(numeros.push(6))
console.log(numeros)
console.log(numeros.pop())
console.log(numeros)
console.log(numeros.unshift())
console.log(numeros)
console.log(numeros.shift())
console.log(numeros)
*/

console.log(numeros.slice(0,4))

//for each
    numeros.forEach(i => {
        console.log(`O numero é ${i}`)
    })

    //Ver se um elemento existe no array
    console.log(numeros.includes(2))
    
    //inverter um array
    
    console.log(frase.padEnd(4, "0"))


    console.log(frase.split(""))
    console.log(frase[4])
    console.log(numeros.join(` `))
    console.log(palavra.repeat(10))

    function imprimirNumeros(...nums){
        for(let i = 0; i < nums.length; i++){
            console.log(nums[i])
        }
    }

    imprimirNumeros(1,2,3)
    imprimirNumeros(numeros)

    const person = {
        name: 'Pedro',
        idade: 10
    }
    const{name: lname, idade: lidade} = person
    console.log(lname,lidade)

