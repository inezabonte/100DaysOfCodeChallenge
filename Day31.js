// function hackerSpeak(str) {
//     return str
//     .replace(/e/g, "3")
//     .replace(/i/g, "1")
//     .replace(/o/g, "0")
//     .replace(/a/g, "4")
//     .replace(/s/g, "5")
//     .replace(/t/g, "7");
	
// }

// console.log(hackerSpeak("javascript is cool"));
// console.log(hackerSpeak('bonte is my name'));
// console.log(hackerSpeak("programming is fun"));
// console.log(hackerSpeak("become a coder"));

function leetInverse(str) {
    return str
    .replace(/3/g, "e")
    .replace(/1/g, "i")
    .replace(/0/g, "o")
    .replace(/4/g, "a")
    .replace(/5/g, "s")
    .replace(/7/g, "t");

}

console.log(leetInverse("j4v45cr1p7 15 c00l"));
console.log(leetInverse("b0n73 15 my n4m3"));
console.log(leetInverse("b3c0m3 4 c0d3r"));