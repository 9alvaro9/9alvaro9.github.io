function numeroAleatorio(max){
    let numero=Math.floor(Math.random() * max) + 1
    return numero
}

let numero =0

let numeros=[]

while(numeros.length<6){
    numero = numeroAleatorio(49)
    if (numeros.indexOf(numero)>-1){
        console.log("ya estaba en la lista: "+numero)
    }
    else {
        numeros.push(numero)
    }
}
console.log(numeros)
   