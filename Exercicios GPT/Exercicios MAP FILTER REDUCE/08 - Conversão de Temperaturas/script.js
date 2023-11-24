const cidades = [
    { nome: "Rio de Janeiro", temperaturas: [25, 28, 22, 30] },
    { nome: "Nova York", temperaturas: [15, 18, 12, 20] },
    { nome: "Tóquio", temperaturas: [22, 25, 20, 28] }
];

const conversao = cidades.map(item => item.temperaturas.map(item => item * 1.8 + 32))
console.log(conversao)
// F = C * 9/5 + 32