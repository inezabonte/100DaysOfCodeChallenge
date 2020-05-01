function isMiniSudoku(square) {
    square = square.flat();
    let result;
    for(i = 1; i<=9; i++) {
        if(square.indexOf(i) == -1) {
           result = false;
           break;
        } else{
            result = true;
        }
    }
	return result;
}

console.log(isMiniSudoku([
    [1, 3, 2], 
    [9, 7, 8], 
    [4, 5, 6]]));

console.log(isMiniSudoku([
    [1, 1, 3], 
    [6, 5, 4], 
    [8, 7, 9]]));

console.log(isMiniSudoku([
    [0, 1, 2], 
    [6, 4, 5], 
    [9, 8, 7]]));