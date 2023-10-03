let pessoa = {
    nome: "Vinicius",
    profissao: "Programador",
    idade: 22,
    voz: function() {
        console.log("Voz Grossa")
    }
}

console.log(pessoa.nome)
console.log(pessoa.idade)
console.log(pessoa.profissao)
pessoa.voz()