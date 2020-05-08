function afterNYears(names, n) {
	for (const key in names) {
        names[key] += Math.abs(n);
    }
    return names;
}

console.log(afterNYears({
    "Joel" : 32,
    "Fred" : 44,
    "Reginald" : 65,
    "Susan" : 33,
    "Julian" : 13
  }, 1));

  console.log(afterNYears({
    "Baby" : 2,
    "Child" : 8,
    "Teenager" : 15,
    "Adult" : 25,
    "Elderly" : 71
  }, 19));

  console.log(afterNYears({
    "Genie" : 1000,
    "Joe" : 40
  }, 5));