function stray(numbers) {
	let arr = numbers.sort();
	
	if(arr[0] === arr[1]) {
		return `The odd number is ${arr[arr.length - 1]}`;
	} else {
		return `The odd number is ${arr[0]}`;
	}


}

console.log(stray([1, 1, 2]));
console.log(stray([17, 17, 3, 17, 17, 17, 17]));
console.log(stray([5, 5, 8, 5, 5, 5, 5, 5]));
console.log(stray([10, 16, 16, 16, 16, 16, 16]));