function wave(str){
    let result = [];

    for(let i= 0; i < str.length; i++){
        let word = str.split("");
        word[i] = word[i].toUpperCase();
        result.push(word.join(""))
    }

    return result;
  }

  console.log(wave('hello'));
  console.log(wave('ineza'));
  console.log(wave('tensor'));