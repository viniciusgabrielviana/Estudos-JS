Exercício 3: Filtrar Alunos Aprovados

Crie uma função que recebe uma lista de objetos representando alunos, onde cada objeto 
tem as propriedades nome e nota. Utilize o método filter para retornar uma nova lista contendo 
apenas os alunos aprovados (nota maior ou igual a 7).

Exemplo de Entrada: 
const listaDeAlunos = [
    { nome: "João", nota: 8.5 },
    { nome: "Maria", nota: 6.0 },
    { nome: "Pedro", nota: 7.8 },
    { nome: "Ana", nota: 5.5 }
];
Exemplo de Saida: 
[{ nome: "João", nota: 8.5 }, { nome: "Pedro", nota: 7.8 }]
