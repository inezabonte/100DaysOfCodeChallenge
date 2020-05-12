function boomIntensity(n) {
    if(n < 2){
        return 'boom';
    }
    let str = 'B' + 'o'.repeat(n) + 'm';
    if(n % 2 === 0){
        str += '!'
    }
    if(n % 5 === 0) {
        str = str.toUpperCase();
    }
    return str;
}
    
console.log(boomIntensity(6));
console.log(boomIntensity(4));
console.log(boomIntensity(1));
console.log(boomIntensity(5));
console.log(boomIntensity(10));