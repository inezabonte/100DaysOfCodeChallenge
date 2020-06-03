const symbols = ["♒ - Aquarius", "♓ - Pisces", "♈ - Aries", "♉ - Taurus", "♊ - Gemini", "♋ - Cancer", "♌ - Leo", "♍ - Virgo", "♎ - Libra", "♏ - Scorpio", "♐ - Sagittarius", "♑ - Capricorn"];

function zodiacSymbol(dob) {
    let month = new Date(dob).getMonth();
    let day = new Date(dob).getDay();
    let oneDay = [21, 20, 21, 21, 22, 22, 23, 23, 24, 24, 23, 22];
    return day >= oneDay[month] ? symbols[month] : symbols[month - 1] || "♑ - Capricorn";

}

console.log(zodiacSymbol("May 9, 1951"));
console.log(zodiacSymbol("October 31, 1977"));