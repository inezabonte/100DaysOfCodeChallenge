// rock = 0 /paper = 1 /scissors = 2
function game(input) {
    let pcInput = Math.floor(Math.random() * Math.floor(3));
    //if user inputs 0 = rock
    if (input === 0) {
        if (pcInput === 0){
            return 'Draw';
        }
        else if(pcInput === 1) {
            return 'PC WINS';
        }
        else if(pcInput === 2) {
            return 'YOU WIN';
        }
    }

    //if user input 1 = paper
    if (input === 1) {
        if(pcInput === 0) {
            return 'YOU WIN';
        }
        else if(pcInput === 1) {
            return 'Draw';
        }
        else if(pcInput === 2) {
            return 'COMP WINS';
        }
    }

    //if user input 2 = scissors
    if (input === 2) {
        if(pcInput === 0) {
            return 'COMP WINS';
        }
        else if(pcInput === 1) {
            return 'YOU WIN';
        }
        else if(pcInput === 2) {
            return 'Draw'
        }
    }
}

console.log(game(0));