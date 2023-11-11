function quantosrepetem (entrada) {
    let contadorRepeticoes = 0
    let separaEntrada = entrada.toString().split(",")
    for(let i = 0; i < separaEntrada.length; i++) {
        for(let j = i + 1; j < separaEntrada.length; j++) {
            if(separaEntrada[i] == separaEntrada[j]) {
                contadorRepeticoes ++
            }
        }
    }
    console.log(contadorRepeticoes)
} 

quantosrepetem([1, 1, 1, 1])