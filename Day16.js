function arithmetic(a, b, operator){
    switch (operator) {
        case 'add':
            return a + b;
            break;
        case 'subtract':
            return a - b;
            break;
        case 'multiply':
            return a * b;
            break;
        case 'divide':
            return a / b;
        default:
            break;
    }

    // if (operator === 'add') {
    //     return a + b;
    // } else if(operator === 'subtract') {
    //     return a - b;
    // } else if (operator === 'multiply') {
    //     return a * b;
    // } else if (operator === 'divide') {
    //     return a / b;
    // }
  }

  console.log(arithmetic(23,4,'subtract'));
  console.log(arithmetic(2372,411,'multiply'));
  console.log(arithmetic(8743,456,'divide'));
  console.log(arithmetic(662,462,'add'));
  console.log(arithmetic(2622,727,'divide'));
  