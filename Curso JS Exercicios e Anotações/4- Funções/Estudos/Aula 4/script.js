function escreverNoConsole () {
    console.log("Olá Mundo!");
}

escreverNoConsole();

// ------------------------------------------------------

function imprimirUmNumero(num) {
    console.log("O número é: " + num);
}

imprimirUmNumero(prompt("Qual o Numero? "));

// -----------------------------------------------------

const numeroAleatorio = function() {
    console.log(Math.random());
}

numeroAleatorio();