function alphabetPosition(text) {
    //we provide the string which will be indexed to provide the numerical value 
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    //declare an array where the final result will stored.
    let alphanums = [];
    //convert the whole string to lowercase so that they are in the same state
    text = text.toLowerCase();
    //create a loop that will iterate until it has goen through all the characters
    for(let i = 0; i < text.length; i++){
        /*it will iterate through all the letters in the string and check their 
        position against the alphabet varible  */
        let idx = alphabet.indexOf(text[i]);
        /*This is a validation of non-alphabetical characters like numbers, spaces,
        punctuation marls. The program ignores them */
        if(idx === -1){
            continue;
        } else{
            /*after the index is retrieved it is added to the 
            alphanums array an d +1 because indexing begins from 0 */
            alphanums.push(idx + 1);
        }
    }
    //finally the numbers in the array are joined with a space between them
    return alphanums.join(' ');
}

console.log(alphabetPosition('Ineza Bonte is coding'));