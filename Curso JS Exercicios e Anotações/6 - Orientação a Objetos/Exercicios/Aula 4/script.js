class CarrinhoDeCompras {
    constructor() {
      this.itens = [];
      this.quantidadeTotal = 0;
      this.valorTotal = 0;
    }
  
    adicionarItem(item) {
      this.itens.push(item);
      this.quantidadeTotal += item.quantidade;
      this.valorTotal += item.preco * item.quantidade;
    }
  
    removerItem(item) {
      const index = this.itens.indexOf(item);
      if (index !== -1) {
        const itemRemovido = this.itens.splice(index, 1)[0];
        this.quantidadeTotal -= itemRemovido.quantidade;
        this.valorTotal -= itemRemovido.preco * itemRemovido.quantidade;
      }
    }
  }
  
  // Exemplo de uso:
  const carrinho = new CarrinhoDeCompras();
  
  const item1 = { nome: "Camiseta", preco: 20, quantidade: 2 };
  const item2 = { nome: "Calça", preco: 40, quantidade: 1 };
  
  carrinho.adicionarItem(item1);
  carrinho.adicionarItem(item2);
  
  console.log(carrinho.quantidadeTotal); // Deve imprimir 3
  console.log(carrinho.valorTotal); // Deve imprimir 80
  
  carrinho.removerItem(item1);
  
  console.log(carrinho.quantidadeTotal); // Deve imprimir 1
  console.log(carrinho.valorTotal); // Deve imprimir 40