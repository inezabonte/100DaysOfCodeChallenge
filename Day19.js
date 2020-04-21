function isSortedAndHow(array) {
    let answer = [];
    
    for(let i = 0; i < array.length; i++) {
        if(array[i] < array[i + 1]) {
            answer.push('Ascending');
        } else if (array[i] > array[i + 1]) {
            answer.push('Descending');
        } 
        
    }
    if(answer.every(v => v === answer[0])) {
        return `Yes, ${answer[0]}`;
    } else{
        return 'no';
    }
 
}

console.log(isSortedAndHow([12,24,56,67,72,78]));
console.log(isSortedAndHow([100, 52, 45, 42, 28]))
console.log(isSortedAndHow([51,382,93,30,30,3039,30]));
console.log(isSortedAndHow([6729,222,882,9999]));
console.log(isSortedAndHow([12,34,56,63,72,78]));