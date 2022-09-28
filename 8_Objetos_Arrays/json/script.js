//JSON = Java script Notation

let json = {
    "name": "Pedro",
    "idade": 10
}

let jsonTexto = JSON.stringify(json)
console.log(jsonTexto)
let jsonOb = JSON.parse(jsonTexto)
console.log(jsonOb)