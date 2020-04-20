function solution(string) {
    let newString;
    string = string.split('');
    for(let i = 0; i < string.length; i++) {
        if(string[i] === string[i].toUpperCase()) {
           string.splice(i ,0 , ' ');
        }
    }
    newString = string.join('');
    return newString;
}



console.log(solution('camelCasing'));
console.log(solution('InezaBonte'));
console.log(solution('ElonMusk'));
console.log(solution('JavaScript'));


//Error in the code above help me find it



// const bub = ['a', 'B', 'c'];
// if(bub[2] === bub[2].toUpperCase()) {
//     console.log(true);
// } else{
//     console.log(false);
// }
// console.log(bub.indexOf(bub[0]));


// function solution(string) {
//     let res = "";
//     let letters = string.split("");
//     letters.forEach(letter=>{
//       if(letter.toUpperCase() == letter)
//         res+=" "+letter
//       else
//         res+=letter
//     })
//     return res;
// }

// console.log(solution('camelCasing'));
// console.log(solution('InezaBonte'));
// console.log(solution('ElonMusk'));
// console.log(solution('JavaScript'));