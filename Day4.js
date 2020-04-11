function capital(str) {
    //start by divinding the string into items in an array
    str = str.split(' ');
    //repeat the loop for all items in the array
    for(let i = 0; i < str.length; i++) {
        /*For each item capitalise the first letter of the word thenslice out the lowercase
        letter and add the new uppercase letter*/
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    //join the items in the array together
    return str.join(' ');
}