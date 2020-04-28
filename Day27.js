function diceGame(arr) {
    let result = 0;
    for (let i = 0; i < arr.length; i++) {
        
        result += arr[i][0] + arr[i][1]
        if(arr[i][0] === arr[i][1]) {
            result = 0;
            break;
        }
    }

    return result;
	
}

console.log(diceGame([[1, 2], [3, 4], [5, 6]]));
console.log(diceGame([[1, 1], [5, 6], [6, 4]]));
console.log(diceGame([[4, 5], [4, 3], [4, 5]]));