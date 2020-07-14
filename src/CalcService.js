function CalcService() {
  const SOMA = '+';
  function Calculate(number1, number2, operation) {
    let result;

    switch(operation){
      case SOMA : result = number1 + number2;
      break;
    }
    return result;
  }
  return [Calculate, SOMA];
}

export default CalcService;
