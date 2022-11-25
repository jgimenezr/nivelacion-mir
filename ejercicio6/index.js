//definición de objeto Pedro
let pedro = {
    nombre: "Pedro Perez",
    edad: 30,
    activo: true,
    hobbies: ["programar", "squash", "piano"],
}

console.log(pedro.edad)//imprime edad de Pedro
pedro.estatura = 1.8//imprime la estatura
delete pedro.activo//elimina la propiedad activo
//recorre e imprime las propiedades del objeto Pedro
for (const key in pedro) {
    result = key.concat(":", pedro[key]);
    console.log(result);
}

//creación de función saluda
pedro.saluda = function saluda(){
    console.log("Hola, me llamo " +  this.nombre);
}

pedro.saluda();//llamada a función saluda
//console.log(pedro);//resultado de llamado a función
