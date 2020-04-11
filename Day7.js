function validate(pin){
    if(typeof(pin) == 'number' && (pin.toString().length == 6 || pin.toString().length == 4)) {
        return true;
    }

    return false;
}

console.log(validate(7119));