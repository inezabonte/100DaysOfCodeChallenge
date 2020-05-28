function scramble(str1, str2) {
    let result= []
    for(let i = 0; i < str2.length; i++){
        result.push(str1.indexOf(str2[i]));
    }

    return result.every(x => x >= 0);
   }
   
   
console.log(scramble('rkqodlw', 'world'));
console.log(scramble('cedewaraaossoqqyt', 'codewars'));
console.log(scramble('katas', 'steak'))