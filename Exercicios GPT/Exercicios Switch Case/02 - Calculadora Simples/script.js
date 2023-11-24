let n1 = Number(prompt("Digite um Numero: "))
let n2 = Number(prompt("Digite um Segundo Numero: "))
let operacao = prompt("Qual Operação Gostaria de Fazer? (*)(+)(-)(/)")
function calculadoraSimples (resultado) {
  switch (resultado) {
    case "+":
      return n1 + n2;
    case "-":
      return n1 - n2;
    case "*":
      return n1 * n2;
    case "/":
      return n1 / n2;
  }
}
console.log(calculadoraSimples(operacao))