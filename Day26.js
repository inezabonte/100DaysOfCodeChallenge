function afterNDays(days, n) {
    const weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
   let result = [];

    for(let i = 0; i < days.length; i++) {
        let idx = weekDays.indexOf(days[i]);
        let day = (idx + n) % 7;
        result.push(weekDays[day]);
    } 
    
    return result;
}

console.log(afterNDays(["Thursday", "Monday"], 4));
console.log(afterNDays(["Wednesday", "Sunday"], 2));