function organizaFrase (frase) {
	let fraseSeparada = frase.split(" ")
  let fraseOrganizada = fraseSeparada.sort()
  return fraseOrganizada
}

console.log(organizaFrase("A raposa marrom pula sobre o cão preguiçoso"))
