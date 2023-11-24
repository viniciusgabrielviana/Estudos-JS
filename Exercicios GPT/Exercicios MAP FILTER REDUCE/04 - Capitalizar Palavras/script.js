function tucPalavra(palavras) {
    let palavrasCapitalizadas = [];
  
    for (let i = 0; i < palavras.length; i++) {
      palavrasCapitalizadas.push(palavras[i].charAt(0).toUpperCase() + palavras[i].substring(1));
    }
  
    return palavrasCapitalizadas.join(" ");
  }
  
  console.log(tucPalavra(["javascript", "é", "poderoso"]));