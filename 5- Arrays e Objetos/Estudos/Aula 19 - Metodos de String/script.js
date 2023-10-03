//Trim: acerta alguns erros de string
let nome = "             \n  Vinicius \n"
console.log(nome)
let nomeCorrigido = nome.trim()
console.log(nomeCorrigido)
 
//padStart: adiciona uma sequencia de valores iguais a uma string// arg1: numero de casas arg2: caractere
let milAoContrario = '1';
console.log(milAoContrario.padStart(4, "0"));

//Split: separa uma string em um array
let frase = "três pratos de trigo para três tigres tristes"
let palavras = frase.split(" ")
console.log(palavras)

//repeat: basicamente repete uma string
let teste = "teste "
console.log(teste.repeat(5))