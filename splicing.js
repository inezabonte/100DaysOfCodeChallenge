let string = 'camelCasing';
string = string.split('');
for(let i = 0; i < string.length; i++) {
    if(string[i] === string[i].toUpperCase()){
      string = string.splice(i,0,' ');
    }
    
}
let final = string.join("");
console.log(final);






// let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May'];
// months.splice(4, 0 , ' ');
// let final = months.join('');
// console.log(final);