function squareDigits(num) {
    //declare an array where the result will be stored
    let result = [];
    //convert the number input into a string then split it into individual string numbers
    num = num.toString().split('');
    //creat a for loop that will apply to each character according to the length of numbers available
    for(let i = 0; i < num.length; i++) {
        //convert the number from a string to an integer so it can be manipulated mathematicaly
        parseInt(num[i]);
        //multiply the individual number by itself then store it in the array
        result.push(num[i] * num[i]); 
    }
    //finally join the contents of the array together. And convert it to an integer
    return parseInt(result.join(''));
}

console.log((squareDigits(253)));
console.log((squareDigits(1234)));
console.log((squareDigits(573)));