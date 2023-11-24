function calculos (...numbers) {
	let numQuadrado = numbers.map(item => item ** 2)
  let concatena = numQuadrado.toString().split(",").join("")
  console.log(concatena)
}
calculos(3,5,1,4)

// 925116