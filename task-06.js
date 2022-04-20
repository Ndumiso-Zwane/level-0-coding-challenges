function maximum(){
    let maxValue = Number.NEGATIVE_INFINITY;
    for (let x = 0; x < arguments.length; x++){
        if (arguments[x] > maxValue){
            maxValue = arguments[x];
        }
        
    }
    return maxValue;
}

console.log(maximum(-1,-4,-3,-6,-2,-1,-90,-32,-5,-15));