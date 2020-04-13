//This function allows you to add all the multiples of two given numbers together within a given range
function solution(number) {
    
    let sum = 0;
    for(let i = 3; i < number; i++) {

        if((i % 3 == 0) || (i % 5 == 0)) {
            sum += i;
        } 
    }
    return sum;
}

console.log(solution(20));
console.log(solution(100));
console.log(solution(36));
console.log(solution(55));