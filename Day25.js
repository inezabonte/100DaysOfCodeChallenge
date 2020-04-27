function sumTwoSmallestNumbers(numbers) {  
    numbers.sort((a,b) => a - b);
    return numbers[0] + numbers[1];
  };

  console.log((sumTwoSmallestNumbers([23,223,33,3443])));
  console.log((sumTwoSmallestNumbers([282,2,33,3963])));
  