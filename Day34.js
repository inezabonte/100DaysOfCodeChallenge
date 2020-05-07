function wordGame(p1, p2) {
    const  words = [];
	let lastChar = '';
	
	for (let i = 0; i < p1.length; i++) words.push(p1[i], p2[i]);
	
	for (let i = 0; i < words.length; i++) {
		if (words.indexOf(words[i]) === i && words[i].startsWith(lastChar))
			lastChar = words[i].slice(-1);
		else return i % 2
			? 'Player 1 wins!'
			: 'Player 2 wins!';
	}
	
	return 'Game continues...';
}

console.log(wordGame(["edabit", "yellow", "growing"], ["tangy", "wedding", "round"]));
console.log(wordGame(["edabit", "yellow", "growing", "dart", "tangy"], ["tangy", "wedding", "ground", "toast", "yellow"]));
console.log(wordGame(["edabit", "yellow", "growing"], ["tangy", "wedding", "ground"]));