function programmers(one, two, three) {
   let maxi = Math.max(one, two, three);
   let mini = Math.min(one, two, three);
   return maxi - mini;
	
}

console.log(programmers(147, 33, 526));
console.log(programmers(33, 72, 74));
console.log(programmers(1, 5, 9));