const n = prompt("Digite um Numero: ")
soma = 0

for (let i = 1; i <= n; i++) {
    if (i % 2 == 0) {
        soma = soma + i 
    }
}

console.log(soma)