function isPrime(num) {
    for(let i = 2; i < num; i++)
      if(num % i === 0) return false;
    return num > 1;
  }

function reversePrime(num) {
    let nop = parseInt(num.toString().split("").reverse().join(""));
    if (nop === num){
        return false
    } else{
    for(let i = 2; i < nop; i++)
      if(nop % i === 0) return false;
    return nop > 1;
    }
}

function backwardsPrime(start, stop){
    let results = [];
    for(let i = start; i < stop; i++) {
        if(isPrime(i) && reversePrime(i)){
            results.push(i);
        }
    }

    return results;
}

console.log(backwardsPrime(2, 100));
console.log(backwardsPrime(9900, 10000));