const fraseSeparada = ["JavaScript", "é", "poderoso", "e", "versátil"]
const juntaFrase = fraseSeparada.reduce((acc, cur) => acc + " " + cur)
console.log(juntaFrase)