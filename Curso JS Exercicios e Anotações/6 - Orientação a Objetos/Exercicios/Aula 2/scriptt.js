class Conta {
    constructor(saldo,saque,deposito) {
        this.saldo = saldo
        this.saque = saque
        this.deposito = deposito
    }
}

const minhaConta = new Conta(1000, 500, 1500);
console.log(minhaConta.saldo)