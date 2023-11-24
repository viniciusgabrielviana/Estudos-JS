function eUtil(diaDaSemana) {
	diaDaSemana = diaDaSemana.toLowerCase().normalize("NFD")
  if(diaDaSemana.includes("-")) {
  	diaDaSemana = diaDaSemana.split("-").shift()
  }
  switch (diaDaSemana) {
  	case "sabado":
    case "domingo":
    return "Não é dia útil";
  case "segunda":
  case "terça":
  case "quarta":
  case "quinta":
  case "sexta":
  	return "É um dia Útil"
  default:
    return "Não é um dia da Semana";
	}
}
console.log(eUtil('quinta-feira'))