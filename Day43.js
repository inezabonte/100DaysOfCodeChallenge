function vowelsAndConsonants(s) {
    let vowels = 'aeiou';
    let vow = "";
    let nonVow = "";
    for(let i = 0; i < s.length; i++){
        if(vowels.indexOf(s[i]) >= 0 ){
            vow += s[i];
        }else{
            nonVow += s[i];
        }
    }

    let result =  vow + nonVow;
    for(let i = 0; i < result.length; i++) {
        console.log(result[i]);
    }
   
}
vowelsAndConsonants("javascriptloops");