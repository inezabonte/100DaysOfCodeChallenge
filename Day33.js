function lovesMe(n) {
    let result = [];
    for(let i = 0; i < n; i++){
        if(i % 2 === 0) {
            result.push('Loves me');
        } else {
            result.push('Loves me not');
        }
    }
    result.splice(n-1,1,result[n-1].toUpperCase());
    return result;
}
console.log(lovesMe(3));
console.log(lovesMe(5));
console.log(lovesMe(4));