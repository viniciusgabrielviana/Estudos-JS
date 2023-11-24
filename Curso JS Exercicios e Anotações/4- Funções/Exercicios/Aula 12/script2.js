function detectaDado (dado) {
    if (typeof dado === 'string') {
        console.log("Este dado é uma String!")
    } else if (typeof dado === 'number') {
        console.log("Este dado é um Number!")
    } else {
        console.log("Este dado é Boolean!")
    }
}

detectaDado("Vinicius")
detectaDado(12)
detectaDado(true)