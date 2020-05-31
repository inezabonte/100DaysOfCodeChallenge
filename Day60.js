function findMissing(list) {

    if(list.length > 3){

        let cmn = (list[list.length -1] - list[0]) / list.length
        
        let i = 0;
        
        while(list[i] + cmn === list[i+1]) i++;
        return list[i] + cmn;

        
    }
}

console.log(findMissing([1, 3, 5, 9, 11]));
console.log(findMissing([3, 6, 9, 15]));