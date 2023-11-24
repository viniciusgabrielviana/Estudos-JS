function contadorDePares (num) {
    for ( let i = num; i > 0; i-- ) {
        if (i % 2 == 0) {
            console.log(i + ` é Par`)
        } 
    }
}

contadorDePares(9);