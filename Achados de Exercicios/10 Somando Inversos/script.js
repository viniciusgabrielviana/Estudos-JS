function somandoInversos (entrada1, entrada2) {
    let separaEntrada1 = entrada1.split(",")
    let separaEntrada2 = entrada2.split(",")
    let inverteEntrada1 = []
    let inverteEntrada2 = []
    let somandoInversos = 0
    for(let i = separaEntrada1.length - 1; i >= 0; i--) {
        inverteEntrada1.push(separaEntrada1[i])
    }
    for(let j = separaEntrada2.length - 1; j >= 0; j--) {
        inverteEntrada2.push(separaEntrada2[j])
    }
    let toNumber1 = parseInt(inverteEntrada1.join(""))
    let toNumber2 = parseInt(inverteEntrada2.join(""))
    somandoInversos = parseInt(toNumber1) + parseInt(toNumber2)
    console.log(somandoInversos.toString().split("").reverse().join("")) //marcos plays

}
somandoInversos("1,2,3", "4,5,6")