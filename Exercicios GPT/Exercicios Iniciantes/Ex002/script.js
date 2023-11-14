//  const n = prompt("Qual número gostaria de saber o fatorial? ");
//  let fatorial = 1;

//  for (let i = 1; i <= n; i++) {
//      fatorial *= i;
//  }

//  console.log(`O fatorial de ${n} é ${fatorial}`);

function fatorial (n) {
    if(n == 0 || n == 1) {
        return 1
    } else {
        return n * fatorial(n-1)
    }
}

console.log(fatorial(0))