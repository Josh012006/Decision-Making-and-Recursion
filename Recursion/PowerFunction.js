function powerFunction (base, exp){
    if(exp === 1){
        return base;
    }
    else{
        return base*powerFunction(base, --exp);
    }
}

console.log(powerFunction(2, 5));
console.log(powerFunction(4, 3));
console.log(powerFunction(10, 5));
console.log(powerFunction(88, 88));