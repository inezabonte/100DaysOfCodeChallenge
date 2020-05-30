function isValidIP(str) {
    str = str.split(".");

    if(str.length !== 4) {
        return "Invalid";
    }

    for(let i = 0; i < str.length; i++) {
        if(str[i] > 255) {
            return "Invalid";
        } 
        if(str[i].length > 1 && str[i][0] == 0){
            return "Invalid";
        } 

    }

    return "valid"
  }

  console.log(isValidIP("123.45.67.89"));
  console.log(isValidIP("123.456.78.90"));
  console.log(isValidIP("1.2.03.4"));