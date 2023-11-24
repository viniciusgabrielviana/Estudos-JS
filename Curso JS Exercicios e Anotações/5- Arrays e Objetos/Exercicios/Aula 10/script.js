let nameList = [ "André", "Maria" , "João" , "Vinicius" , "Aryana" ] 
let deleteVinicius = 3

function ifName () {
    if (nameList.includes("Vinicius")) {
    console.log ("Sim o Nome Vinicius está na Lista!")
    } else {
    console.log("Não, o Nome Vinicius não esta na Lista!")
    }
}

ifName ()
nameList.splice(deleteVinicius, 1)
console.log(nameList)
ifName ()