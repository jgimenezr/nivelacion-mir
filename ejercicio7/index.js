//definición de objeto
const receta = {}

receta.nombre = "Sandwich"
receta.ingredientes = []

receta.ingredientes.push(
    {
        nombre: "Pan",
        cantidad: 2
    }
)

receta.ingredientes.push(
    {
        nombre: "Queso",
        cantidad: 1
    }
)

//imprirmir receta
//console.log(receta);

//imprimir nombre de primer ingrediente
console.log(receta.ingredientes[0].nombre)

//suma de totales de cantidad
let total = 0
receta.ingredientes.forEach(elemento =>{
    total += elemento.cantidad
})

//imprimir totales
console.log('Total de ingredientes de la receta: $(total) unidades')
