function abaixoDaMedia (...notas) {
    let somaNotas = 0
    for(let i = 0; i < notas.length; i++) {
        somaNotas = somaNotas + notas[i]
    }
    let mediaNotas = somaNotas / notas.length
    let notasMaiores = notas.filter(item => item > mediaNotas)
    let notasMenores = notas.filter(item => item < mediaNotas)
    return `${notasMaiores.join(",")}\n${notasMenores.join(",")}`
}
console.log(abaixoDaMedia(7,8,9,10,5.5,6.7))
