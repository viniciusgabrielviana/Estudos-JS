const matrizA = [
     [1, 2, 3],
     [4, 5, 6],
];
  
const matrizB = [
    [7, 8, 9],
    [10, 11, 12],
];

function somaMatrizes(n) {
    let resultado = []
    for(let i = 0; i < matrizA.length; i++ ){
        let linha = []
        for(let j = 0; j < matrizA[i].length; j++){
            linha.push(matrizA[i][j] + matrizB[i][j])
        }
        resultado.push(linha)
    }
    console.log(resultado)
}

somaMatrizes()