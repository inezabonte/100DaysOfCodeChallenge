function foldArray(array, folds) {

    let first = Math.floor(array.length/2);
    let last = Math.ceil(array.length/2);

    let left = array.slice(0, first);
    let right = array.slice(last).reverse();

    let result = left.map((val, idx) => {
       return val + right[idx];
    });

    if(first !== last) {
        result.push(array[first]);
    }

    return folds === 1 ? result : foldArray(result, folds - 1)
}

console.log(foldArray([1, 2, 3, 4, 5], 1));
console.log(foldArray([1, 2, 3, 4, 5, 6, 7, 8, 9], 2));