let caracteres = "abcdefghijklmnopqrstuvwxyz"
let mayusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let numeros = "0123456789"
let especiales = "!@#$%^&*()"

function numeroAleatorio(min,max){
    return Math.floor(Math.random()*(max-min+1))+min
}

let longitud = 10

if (longitud < 8){
    longitud = 8
}
if (longitud > 50){
    longitud = 50
}

let password = ""

let pos = numeroAleatorio(0,mayusculas.length-1)
password = password + mayusculas[pos]

let cantidadNumeros = numeroAleatorio(1,2)
for(let i=0;i<cantidadNumeros;i++){
    let posNum = numeroAleatorio(0,numeros.length-1)
    password = password + numeros[posNum]
}

let cantidadEspeciales = numeroAleatorio(1,2)
for(let i=0;i<cantidadEspeciales;i++){
    let posEsp = numeroAleatorio(0,especiales.length-1)
    password = password + especiales[posEsp]
}

for(let i=password.length;i<longitud;i++){
    let posLetra = numeroAleatorio(0,caracteres.length-1)
    password = password + caracteres[posLetra]
}

password = password.split('').sort(()=>Math.random()-0.5).join('')

console.log(password)