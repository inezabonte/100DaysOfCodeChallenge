function findMissingLetter(array) {
    const start = array[0].charCodeAt(0);
    let result = "";
    for(let i = 1; i < array.length; i++) {
        if(start + i !== array[i].charCodeAt(0)) {
            result += String.fromCharCode(start + i);
        }
    }
    return result;
}
console.log(findMissingLetter("abcdf"));
console.log(findMissingLetter("opqrt"));
console.log(findMissingLetter("HIJKLMP"));