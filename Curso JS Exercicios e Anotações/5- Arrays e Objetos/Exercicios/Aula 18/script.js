const calculadora = {
    somar: function(a, b) {
        return a + b;
    },
    subtrair: function(a, b) {
        return a - b;
    },
    dividir: function(a, b) {
        if (b === 0) {
            throw new Error("Não é possível dividir por zero.");
        }
        return a / b;
    },
    multiplicar: function(a, b) {
        return a * b;
    }
};

const resultadoSoma = calculadora.somar(5, 3);
const resultadoSubtracao = calculadora.subtrair(10, 4);
const resultadoDivisao = calculadora.dividir(15, 3);
const resultadoMultiplicacao = calculadora.multiplicar(6, 7);

console.log("Resultado da Soma:", resultadoSoma);
console.log("Resultado da Subtração:", resultadoSubtracao);
console.log("Resultado da Divisão:", resultadoDivisao);
console.log("Resultado da Multiplicação:", resultadoMultiplicacao);