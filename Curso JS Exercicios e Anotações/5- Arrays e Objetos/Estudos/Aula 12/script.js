let nomes = ["Vinicius" , "Maria" , "José"]
let elementoRemovido = nomes.pop()

// Adicionar ou remover elemento pelo final do arr
console.log(elementoRemovido)
console.log(nomes)
nomes.push ("Pedro")
console.log(nomes)

// Adicionar ou remover elemento pelo inicio do arr
elementoRemovido = nomes.shift()
console.log(elementoRemovido)
console.log(nomes)
nomes.unshift("Vinicius")
console.log(nomes)
nomes.unshift("André")
console.log(nomes)

//localizar item no arr pelo indice
console.log(nomes.lastIndexOf("Vinicius"))
console.log(nomes.indexOf("André"))

// Slice, encontra os indices do array pelas suas casas
let nums = [0,1,2,3,4,5,6,7,8,9]
console.log(nums.slice(4,5))
console.log(nums.slice(4,6))
console.log(nums.slice(2))
console.log(nums.slice(-2))
console.log(nums.slice(6,7))
console.log(nums.slice(3,-2))

//forEach, como se fosse um for/while proprio do arr/ propriedade pronta
nums.forEach(num => {
    console.log("O número é: " + num)
})

//includes: indentifica se existe o elemento no array
console.log(nomes.includes("Vinicius"))

//reverse: reverte o array
console.log(nums.reverse())
