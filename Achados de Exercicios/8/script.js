function rgb (hexadecimal) {
    let separarHexa = hexadecimal.substr(1).split("")
    let hexa = [red,green,blue]
    for(let i = 0; i <= separarHexa.length; i = i + 2) {
        hexa[i - 1] = (separarHexa[i]*16^1) + (separarHexa[i + 1] *16^0)
    }
    console.log(hexa)
}
rgb("#3172e2")