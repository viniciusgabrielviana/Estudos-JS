function criarMatriz(linha, coluna) {
    for (let i = 1; i <= linha; i++) { // Loop para as linhas
        let linhaAtual = '';
        for (let j = 1; j <= coluna; j++) { // Loop para as colunas
            linhaAtual += j + ' ';
        }
        console.log(linhaAtual);
    }
}

criarMatriz(5,5)