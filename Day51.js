function order(words){


    const sorted = words.split(" ").sort((a, b) => {
        const aNUmber = extractNumber(a);
        const bNUmber = extractNumber(b);

        if(a > b) 
        return 1;
        if(b > a)
        return -1
        return 0;

    });

    // words = words.split(" ");
    // let sortedArray = [];
    // for(let i = 0; i <= words.length; i++){
    //     for(let j = 0; j < words.length; j++){
    //         if(words[j].indexOf(i) >= 0) {
    //             parseInt(words[j].indexOf(i))
    //             sortedArray.push(words[j]);
    //         }
    //     }
    // }
    // return sortedArray.sort();
  }
  console.log(order("is2 Thi1s T4est 3a"));
  console.log(order("4of Fo1r pe6ople g3ood th5e the2"));