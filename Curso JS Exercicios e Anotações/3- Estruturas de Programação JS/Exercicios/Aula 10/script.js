let Vel = prompt("Bom dia Sr. Policial, em Qual Velocidade este Motorista estava? ")

if ( Vel < 80 ) {
    console.log("Não Precisa Multa-lo seu Policial, Ele está dentro do limite de Velocidade que é 80Km/h")
} else {
    console.log(`Pode Multa-lo Sr. Policial, ele estava a ${Vel}Km/h e aqui só é permitido 80Km/h!`)
}