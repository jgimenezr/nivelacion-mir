function suma(numero) {
    var suma = 0;
    for (let i = 1; i <= numero; i++) {
        suma +=i
    }  
    return suma;        
}

console.log(suma(4));
console.log(suma(10));
console.log(suma(15));