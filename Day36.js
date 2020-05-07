function clearFog(str) {
	const regex = /[fog]/gi;
	if(str.match(/[fog]/g) === null) {
    return "It's a clear day!";
	}
	else {
		return str.replace(regex, '');
	}
}

console.log(clearFog("sky"));
console.log(clearFog("fogfogfffoooofftreesggfoogfog"));
console.log(clearFog("fogFogFogffffooobirdsandthebeesGGGfogFog"));