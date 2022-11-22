function maxIndex(arreglo) {
    let indexMay = 0, numMay = 0;
    if (arreglo.length === 0) return -1;
    var maxIndex = arreglo[0];
    for(let i = 0; i < arreglo.length; i++) 
    {
        if (arreglo[i] > numMay){
            numMay = arreglo[i];
            indexMay = i;
        }
    }    
    return indexMay;     
}

console.log(maxIndex([1,3,2]));//1
console.log(maxIndex([10,9,8,7,6,5,4]));//10
console.log(maxIndex([]));//-1