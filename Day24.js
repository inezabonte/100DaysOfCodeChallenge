function capitalize(s){
    let result = [];
    let a = '';
    let b = '';
    for (let i = 0; i < s.length; i++) {
        if ((i % 2) !== 0) {
            a += s[i].toUpperCase();
        } else {
            a += s[i]
        }

        if((i % 2) === 0) {
            b += s[i].toUpperCase();
        } else {
            b += s[i]
         
        }
    }
    result.push(b,a);
    return result;
}

console.log(capitalize('bonte'));
console.log(capitalize('ineza'));
console.log(capitalize('grevy'));
console.log(capitalize('code'));