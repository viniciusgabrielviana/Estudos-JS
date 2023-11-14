function escada(n, linhaAtual = 1) {
    if (linhaAtual > n) {
        return;  // Condição de parada
    }

    //const espacos = ' '.repeat(n - linhaAtual);
    const cerquilha = '#'.repeat(linhaAtual);
    console.log(cerquilha);

    // Chamada recursiva para a próxima linha
    escada(n, linhaAtual + 1);
}

// Exemplo de uso
escada(5);