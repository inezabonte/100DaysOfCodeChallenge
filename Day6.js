function openOrSenior(data) {
    //we start by declaring the array where our result will be stored.
    let newData = [];
    //loop in the input until i is greater than the length of the array 
    for(let i = 0; i < data.length; i++) {
        //consitions for each group for age and handicap
        if(data[i][0] >= 55 && data[i][1] > 7) {
            //push the result to the newData array
            newData.push('Senior');
        } else{
            newData.push('Open');
        }
    }
    //display the results
    return newData;
}

console.log(openOrSenior([[18, 20], [45, 2], [61, 12]]));