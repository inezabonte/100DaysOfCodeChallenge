function reversedBinaryInteger(numbr) {
    numbr = numbr.toString(2).split("").reverse().join("");
    return parseInt(numbr, 2);
}

console.log(reversedBinaryInteger(10));
console.log(reversedBinaryInteger(20));
console.log(reversedBinaryInteger(15));
console.log(reversedBinaryInteger(13));
