function isLeap(year) {
	return year % 400 === 0 || year % 4 === 0 && year % 100 !== 0;
}

console.log(isLeap(2020));
console.log(isLeap(1800));
console.log(isLeap(2000));
console.log(isLeap(2019))
