const notas = [8.5, 7.2, 6.8, 9.0, 5.5, 8.9, 7.6, 6.3, 9.5, 8.0, 7.1, 6.7, 9.2, 5.8, 8.3, 7.9, 6.1, 9.8, 7.4, 6.5, 7.5, 8.0, 6.5, 9.0, 8.5]
const somaNotas = notas.reduce((acc, cur) => cur + acc)
const media = somaNotas / notas.length
const aprovados = notas.filter(item => item > media.toFixed(2))
console.log(aprovados)