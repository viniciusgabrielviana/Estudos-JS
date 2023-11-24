function retornandoPares (numbers) {
	let pares = numbers.filter(num => num % 2 == 0)
	return pares
}
console.log(retornandoPares([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))