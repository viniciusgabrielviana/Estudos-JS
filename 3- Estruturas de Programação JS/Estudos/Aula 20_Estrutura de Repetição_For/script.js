for(let numero = 2; numero < 100; numero = numero * 2) {
    console.log("O Numero é: " + numero)
}

let x = 0

while (x < 11) {
    x += 1
    if (x % 2 == 1) {
        continue
    }

    console.log(x)
    x ++
}

let nome = prompt("Qual Seu Nome?")
switch(nome) {
    case "Vinicius":
        console.log(nome)
        break
    case "Ariana":
        console.log(nome)
        break
    default:
        console.log("nome")
        break
}