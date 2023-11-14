//  function escada(n) {
//      for(let i = 1; i <= n; i++) {  //linhas 
//          const espacos = ' '.repeat(n - i)
//          const cerquilhas = "#".repeat(i)
//          console.log(espacos + cerquilhas)
//      }
//  }
//  escada(5)

function escada(n, acumulador = 1) {
    const cerquilha = "#";

    if (acumulador >= n) {
        return ""; 
    } else {
        const linha = cerquilha.repeat(acumulador);
        console.log(linha);

        return linha + escada(n, acumulador + 1);
    }
}
console.log(escada(5))