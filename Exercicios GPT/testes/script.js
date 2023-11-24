function calculoDeMedias(...notas) {
    separandoNotas = notas
    somandoNotas = 0
    for(let i = 0; i < notas.length; i++) {
        somandoNotas = (somandoNotas + separandoNotas[i]) 
    }
    somandoNotas = somandoNotas / notas.length
    console.log(`A nota Final deste Aluno é ${somandoNotas}`)
}

function calculoDeMediaReduce (...numbers) {
    const sum = numbers.reduce((accum, num) => accum + num, 0)
    return sum / numbers.length
}

console.log(calculoDeMediaReduce(9,9,9,9))