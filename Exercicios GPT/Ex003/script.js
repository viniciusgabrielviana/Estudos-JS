function escada(n) {
    for(let i = 1; i <= n; i++) {  //linhas 
        const espacos = ' '.repeat(n - i)
        const cerquilhas = "#".repeat(i)
        console.log(espacos + cerquilhas)
    }
}

escada(5)