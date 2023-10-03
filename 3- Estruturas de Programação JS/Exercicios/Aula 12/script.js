let idade = prompt("Qual sua Idade? ")
let cnh = prompt("Você possui CNH? ")

if (idade < 18) {
    console.log("Você não possui idade para dirigir, Sinto muito !")
} else if ( idade >= 18 && cnh == "sim" ){
    console.log("Parabéns, Você pode Dirigir !")
} else {
    console.log("Sinto muito, Por não ter CNH Você não pode Dirigir")
}
