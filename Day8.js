function toCamelCase(str) {
    let strArray;
    if(str === ''){
        return "";
    }
    if(str.indexOf('-') !== -1){
        strArray = str.split('-');
    } else{
        strArray = str.split('_');
    } 
    let ccString = strArray[0];

    for(let i = 1; i < strArray.length; i++){
        ccString += capitalize(strArray[i]);
    }
    return ccString;

}
let capitalize = (str) => {
    return str[0].toUpperCase() + str.slice(1);
}

console.log(toCamelCase('ineza_bonte_grevy'));
console.log(toCamelCase('change-this-to-camel-case'));