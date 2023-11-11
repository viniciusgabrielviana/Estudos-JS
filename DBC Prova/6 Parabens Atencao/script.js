function parabensatencao(chamada) {
    let contadorAtraso = 0
    let contadorFalta = 0
    let definhando = chamada.split("") 
    for (let i = 0; i < definhando.length; i++) {
        if(definhando[i] === "F") {
            contadorFalta ++
        } 
        if (definhando[i] === "A") {
            contadorAtraso ++
        }
    }
    if (contadorAtraso >= 4 || contadorFalta >= 3) {
        console.log("atencao")
    } else {
        console.log("parabens")
    } 
}

parabensatencao("PFFFF")