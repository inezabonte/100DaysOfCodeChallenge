function missingNum(arr) {
     let result= [];

    for (let i = 1; i <=10; i++) {
        if(arr.indexOf(i) == -1) {
            result.push(i);
        }
        
    }
	return result;
}
console.log(missingNum([1,2,3,4,6,7,8,9,10]));
console.log(missingNum([9,2,1,4,7,6,3,5,8]));