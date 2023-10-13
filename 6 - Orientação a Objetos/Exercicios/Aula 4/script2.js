class Carrinho {
    constructor(itens, qtd, valorTotal) {
        this.itens = itens
        this.qtd = qtd
        this.valorTotal = valorTotal
    }
}

let carrinho = new Carrinho([
    {
        id: 1,
        nome: "Camisa",
        qtd: 1,
        preco: 20
    }
    {
        id: 2,
        nome: "Tênis"
        qtd: 1,
        preco: 30
    }
]3 , 120)

console.log()