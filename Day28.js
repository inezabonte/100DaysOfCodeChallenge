function arrayOfMultiples (num, length) {
    let result = [];
    for (let i = 0; i < length; i++) {
        result.push(num * (i+1));

    }

    return result;
}

console.log(arrayOfMultiples(7, 5));
console.log(arrayOfMultiples(12, 10));
console.log(arrayOfMultiples(3,4));