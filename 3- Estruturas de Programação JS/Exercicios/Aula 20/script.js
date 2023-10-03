let numero = prompt("Qual número gostaria de saber se é Primo? ");
numero = parseInt(numero); 
let x = 2;
let primo = true;

if (numero <= 1) {
    primo = false; 
} else {
    for (; x < numero; x++) {
        if (numero % x == 0) {
            primo = false; 
            break; 
        }
    }
}

if (primo) {
    console.log(numero + " é primo");
} else {
    console.log(numero + " não é primo");
}