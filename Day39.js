function getDay(day) {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let dayOfWeek = new Date(day).getDay();
    
    return days[dayOfWeek];
}

console.log(getDay("12/07/2016"));
console.log(getDay("09/04/2016"));
console.log(getDay("12/08/2011"));