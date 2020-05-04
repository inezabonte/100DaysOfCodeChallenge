function testJackpot(result) {
    if(result.every(v => v === result[0])) {
        return true;
    } else {
        return false;
    }
	
}

console.log(testJackpot(["@", "@", "@", "@"]));
console.log(testJackpot(["&&", "&", "&&&", "&&&&"]));