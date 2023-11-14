const anagrama = (anagrama1, anagrama2) => {
    if (anagrama1.toString() === anagrama2.toString() || anagrama1.length !== anagrama2.length) {
        return false
    } 
    let anagramaOrdenado1 = anagrama1.split("").sort().join()
    let anagramaOrdenado2 = anagrama2.split("").sort().join()
    if ( anagramaOrdenado1 == anagramaOrdenado2) {
        return true
    }
}
console.log(anagrama("rato","rato"))
