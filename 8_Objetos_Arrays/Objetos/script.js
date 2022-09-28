//Objetos
    let pessoa =  {
        nome: "Pedro",
        idade: "20",
        falar: function(){
           return console.log("Ola")
        }
    } 

        console.log(pessoa)


function Pessoa(nome, idade){
    this.nome = nome;
    this.idade - idade;
}


  console.log(Object.keys(pessoa))