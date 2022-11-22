function join(arreglo) {
    let resultado = "";
    for (let i = 0; i < arreglo.length; i++){
        resultado += arreglo[i];
        if(arreglo.length - 1 !== i) resultado+=" "
    }
    return resultado;
}

console.log(join(["Hola", "Mundo"]));//"Hola Mundo"
console.log(join(["Make", "It" , "Real" ]));//"Make It Real"
console.log(join([]));//""