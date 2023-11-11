function timeConversion(s) {
    let divPalavras = s.split(":");
    let periodo = divPalavras[2].slice(2); // Extrai "AM" ou "PM" da string e adiciona em periodo
    divPalavras[2] = divPalavras[2].slice(0, 2); // Remove "AM" ou "PM" da string
    divPalavras.push(periodo)
    let horaFinal = 0
    let horaZero = 0
    if(divPalavras[3] === "PM") {
        horaFinal = Number(divPalavras[0]) + 12
        divPalavras.pop()
        divPalavras.shift()
        divPalavras.unshift(horaFinal)
        if(divPalavras[0] == 24) {
            divPalavras[0] = "00"
        }
        horaFinal = divPalavras.join(":")
    } else {
        divPalavras.pop()
        if(divPalavras[0] == 12) {
            divPalavras[0] = "00"
        }
        horaFinal = divPalavras.join(":")
    }
    return horaFinal
}

const resultado = timeConversion("12:45:54PM");
console.log(resultado);