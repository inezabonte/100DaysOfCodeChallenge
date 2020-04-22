function solution(str){
    let i = 0
    let result = []
    if (str.length % 2 !== 0) {
        str = str + '_';
    }

    while (i < str.length) {
        result.push(str[i] + str[i+1]);
        i += 2;
    }

    return result;
}

console.log(solution('abcde'));
console.log(solution('Ineza'));
console.log(solution('JayHardway'));
console.log(solution('abcd'));