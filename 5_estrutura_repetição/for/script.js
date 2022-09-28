/*
let x = 2;
for(x; x <= 100;x = x + x){
    console.log(x)
}
*/
let nome = `Pedro`
console.log(nome)
for(x = 0;x < 100; x++){
    console.log(x)
    if(x == 50){
        nome = `João`
        console.log(`Nome mudou para ${nome}`)
        continue;
    }
}