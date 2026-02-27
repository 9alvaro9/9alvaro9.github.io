function numeroAleatorio(){
    let max=6
    let numero=Math.floor(Math.random() * max) + 1;
    return numero
}

let numero=numeroAleatorio(12)
console.log(numero)

