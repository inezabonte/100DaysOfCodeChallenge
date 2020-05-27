function rgbToHex(col) {
    
    return '#' + col.replace('rgb(', "")
    .replace(")", "")
    .split(",")
    .map(colour => parseInt(colour, 10).toString(16))
    .map(colour => ('0' + colour).slice(-2))
    .join("");
}

console.log(rgbToHex("rgb(0, 128, 192)"));
console.log(rgbToHex("rgb(45, 255, 192)"));
console.log(rgbToHex("rgb(0, 0, 0)"));


//Opposite Direction


// function hexToRgb(col) {
//     col = col.replace("#", "");
//     let red = parseInt((col[0] + col[1]), 16).toString(10);
//     let green = parseInt((col[2] + col[3]), 16).toString(10);
//     let blue = parseInt((col[4] + col[5]), 16).toString(10);
    
//     return `rgb(${red}, ${green}, ${blue})`;

// }

// console.log(hexToRgb("#0080c0"));
// console.log(hexToRgb("#2dffc0"));

