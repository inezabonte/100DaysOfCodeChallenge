function iqTest(numbers){
    numbers = numbers.split(" ");
    let odd = "";
    let even = "";
    for(let i = 0; i < numbers.length; i++){
        if((numbers[i] % 2) == 0) {
            even += numbers[i];
        } else {
            odd +=numbers[i];
        }
    }

    if(odd.length > even.length){
        return even;
    } else{
        return odd;
    }
    
  }

  console.log(iqTest("2 4 7 8 10"));
  console.log(iqTest("1 2 1 1"));
  console.log(iqTest("1 1 2 2"));