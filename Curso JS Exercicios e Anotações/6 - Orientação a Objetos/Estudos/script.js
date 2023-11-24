let gato = {
    raca: '',
    pular: function() {
        console.log("PULO")
    },
    miar: function() {
        console.log("MIAU")
    },
    setRaca: function (raca) {
        this.raca = raca
    },
    getRaca: function() {
        return "A Raça é " + this.raca
    }
}
gato.miar()
gato.pular()

gato.setRaca("Gato do Banhado")
console.log(gato.raca)
console.log(gato.getRaca())