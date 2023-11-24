const valor = Number(prompt("Qual o valor que gostaria de Converter? "))
const medida = prompt("Qual a medida à converter? ")
function conversao (metros) {
	switch(metros.toLoweCase) {
  	case "m":
    	return valor + " metros"
    case "cm":
    	return (valor/ 100) + " metros"
    case "km":
    	return (valor * 100) + " metros"
    default: 
    	return "Unidade de Medida Inválida"
  }
}
console.log(conversao(medida))