function disemvowel(str) {
    // this code replaces all occurrences of vowels in a string.
    return str.replace(/[aeiou]/gi, '');

  }

  console.log(disemvowel('You are trash'));
  console.log(disemvowel('Go to hell'));
  console.log(disemvowel('Fuck You'));
  console.log(disemvowel('Your music is trash'));
  console.log(disemvowel('You Hoe'));