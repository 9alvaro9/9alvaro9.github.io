let 
alfabeto ="abcdefghijklmnñopqrstuvwxyz"
let frase="zanahoriaz verdes"
let paso=3
let fraseCifrada=""

for (let i=0;i<frase.length;i++){
    if (frase[i] === " ")
        fraseCifrada=fraseCifrada+" "
    let posicion=(alfabeto.indexOf(frase[i])+paso) % alfabeto.length
    let letraCifrada=alfabeto[posicion]
    fraseCifrada=fraseCifrada+letraCifrada
}
console.log(fraseCifrada)