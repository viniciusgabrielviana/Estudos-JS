let maisDeCinco = [1,2,3,4,5,6,7]
let menosDeCinco = [1,2,3,4]

function teste (arr) {
    if (arr > 5 ) {
        console.log("Muitos Elementos")
    } else {
        console.log("Poucos Elementos")
    }
}

teste(maisDeCinco.length)
teste(menosDeCinco.length)