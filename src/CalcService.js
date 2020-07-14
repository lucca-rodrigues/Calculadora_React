function CalcService() {
  const SOMA = '+';
  const SUBTRACAO = '-';
  const DIVISAO = '/';
  const MULTIPLICACAO = '*';

  function Calculate(number1, number2, operation) {
    let result;

    switch(operation){
      case SOMA : result = number1 + number2;
      break;

      case SUBTRACAO : result = number1 - number2;
      break;

      case DIVISAO : result = number1 / number2;
      break;

      default: result = 0;
    }
    return result;
  }
  return [Calculate, SOMA, SUBTRACAO, DIVISAO];
}

export default CalcService;
