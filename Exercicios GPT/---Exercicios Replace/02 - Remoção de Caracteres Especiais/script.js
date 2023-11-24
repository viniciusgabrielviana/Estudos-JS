const frase = "@Olá! Como você está?"
const fraseSemEspeciais = frase.replace(/[^\w\sÀ-ÖØ-öø-ÿ]/g,"")
console.log(fraseSemEspeciais)