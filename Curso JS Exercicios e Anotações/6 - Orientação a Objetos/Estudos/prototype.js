let pessoa = {
    maos: 2
}

let pessoaNova = Object.create(pessoa)
console.log(pessoaNova)
console.log(Object.getPrototypeOf(pessoa))
console.log(Object.getPrototypeOf(pessoa) === Object.prototype)
console.log(pessoaNova.hasOwnProperty("maos"))