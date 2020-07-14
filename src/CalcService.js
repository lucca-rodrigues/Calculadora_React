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

  function ConcatNumber(atualNumber, concatenedNumber){
    if(atualNumber === '0' || atualNumber === null){
      atualNumber = '';
    }
    if(concatenedNumber === '.' && atualNumber === ''){
      return '0.';
    }
    if(concatenedNumber === '.' && atualNumber.indexOf('.') > -1) {
      return atualNumber;
    }

    return atualNumber + concatenedNumber;
  }
  return [Calculate, ConcatNumber, SOMA, SUBTRACAO, DIVISAO];
}

export default CalcService;
