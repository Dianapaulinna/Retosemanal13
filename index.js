
const DateOfBirth = require('date-of-birth')
console.log()

const nombres = [
    "Diana",
    "María",
    "José",
    "Juan",
    "Pedro",
    "Luis"
]

fs.writeFile("./directorio/nombres.txt", nombres.join("\n"), function(error){
    if(error) {
        console.log("Error al escribir el archivo", error.message)
    }
    else {
        console.log("Archivo de nombres escrito correctamente")
    }
})

