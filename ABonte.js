function startCountdown() {
    let message = [
        "----------------------------------",
        "S O  T O D A Y", 
        "----------------------------------",
        "I S  S O M E O N E ' S", 
        "----------------------------------",
        "B I R T H D A Y",
        "----------------------------------",
        "T H E  O N E  A N D  O N L Y",
        "----------------------------------", 
        "A B R A H A M",
        "----------------------------------", 
        "M U S Y O K I",
        "----------------------------------", 
        "🔥🔥🔥🔥🔥🔥🔥🔥",
        "----------------------------------", 
        "🥳🥳🥳🥳🥳🥳🥳🥳🥳",
        "----------------------------------", 
        "H A P P Y  B I R T H D A Y  B R O",
        "----------------------------------"
        ]
    let counter =0;
    let index = 0;
      
    const interval = setInterval(() => {
        if(counter > 0){

        console.log(counter);
        counter--;
        } else{
            if(index === message.length){
                clearInterval(interval);
            }else{
            console.log(message[index]);
            index++;
            }
        }
    }, 1000);
  }

  startCountdown();