function oddOrEven(array) {
    
    let result = 0;
for(let i = 0; i < array.length; i++) {
    result += array[i];
}
if (result % 2 === 0){
    return 'even';
}else {
    return 'odd';
}
}

console.log(oddOrEven([0, 1, 5]));
console.log(oddOrEven([4, 2, 5]));