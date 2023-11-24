const pessoas = [
    { nome: "Alice", idade: 30 },
    { nome: "Charlie", idade: 35 },
    { nome: "Bob", idade: 25 },
  ];
  const pessoasOrganizadas = pessoas.map(item => item.nome).sort()
  console.log(pessoasOrganizadas)
  
  for (let i in pessoas) {
      console.log(pessoas[i].nome)
  } // percorre as posições do array
  for (let i of pessoas) {
      console.log(i.nome)
  } // joga o objeto pra dentro do i