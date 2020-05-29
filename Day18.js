// function thirt(n) {
// 	let ans;
//     let result = [];
//     const remainders = [1, 10, 9, 12, 3, 4, 1];
//     n = n.toString().split('').reverse();
	
//     for(let i = 0; i < n.length; i++) {
//         for (let i = 0; i < remainders.length; i++) {
			
//     }
// 	result.push(parseInt(n[i]) * remainders[i]);
// }
// ans = result.reduce((a,b) => a+b,0);
// return ans;
// }


function thirt(n) {

while(n>99){
    let b = 0;
    let arr = [1, 10, 9, 12, 3, 4, 1, 10, 9, 12, 3, 4];
    let a =n.toString().split('').reverse();
    for (let i=0; i<a.length; i++) {
    b+= Number(a[i])* arr[i]; 
    }
    n=b;
    }
    return b;
}

console.log(thirt(1234567));
console.log(thirt(16674));