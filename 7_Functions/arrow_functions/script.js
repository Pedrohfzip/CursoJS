const parOuimpar = (x) =>{
    let y ;
    y = x % 2;
    if(y == 0){
       return console.log("É par")
    }
    if(y == 1){
        return console.log("É impar")
    }
}

console.log(parOuimpar(2))

const hellomundo = () =>{
    console.log("Hello World!")
}

hellomundo();

const parOuimpar2 = (x) => x % 2;
console.log(parOuimpar2(2))