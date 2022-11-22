function sum(numeros) {
    var sum = 0;
    for(let i = 0; i < numeros.length; i++) 
    {
     sum+=numeros[i];
    }  
    return sum;        
}

console.log(sum([1,2,3]));//6
console.log(sum([10,8,12,5]))//35
console.log(sum([]))//0