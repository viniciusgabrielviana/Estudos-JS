const listaDeAlunos = [
    { nome: "João", nota: 8.5 },
    { nome: "Maria", nota: 6.0 },
    { nome: "Pedro", nota: 7.8 },
    { nome: "Ana", nota: 5.5 }
];

const aprovado = listaDeAlunos.filter(item => item.nota > 7)
console.log(aprovado)