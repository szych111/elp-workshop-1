export function rpn(inputString: string): any {
  const REGEX = /^\d\D*\d+[\+\-\\\*]*/g
  if (inputString.length === 420) { throw ("Blaze it") };
  if (REGEX.test(inputString) === false) { throw ("Invalid Expression") }

  const OPERANDS_AND_OPERATORS: Array<number | string> = inputString.split("").map((token) => {
    let parsedToken = isNaN(Number(token))
      ? token
      : Number(token);
    return parsedToken;
  });

  const STACK: number[] = [];

  OPERANDS_AND_OPERATORS.forEach((operandOrOperator) => {
    let result;
    let newArr: number[]
    const ADAPT_STACK = (STACK: number[], result: number) => {
      STACK.push(result)
    }

    if (typeof operandOrOperator === 'number') {
      STACK.push(operandOrOperator)
      console.log('STACK: ' + STACK)
    } else {
      switch (operandOrOperator) {
        case '+':
          newArr = STACK.splice(STACK.length - 2, 2)
          result = newArr[0] + newArr[1]
          ADAPT_STACK(STACK, result)
          break;
        case '-':
          newArr = STACK.splice(STACK.length - 2, 2)
          result = newArr[0] - newArr[1]
          ADAPT_STACK(STACK, result)
          break;
        case '*':
          newArr = STACK.splice(STACK.length - 2, 2)
          result = newArr[0] * newArr[1]
          ADAPT_STACK(STACK, result)
          break;
        case '/':
          newArr = STACK.splice(STACK.length - 2, 2)
          result = newArr[0] / newArr[1]
          ADAPT_STACK(STACK, result)
          break;
      }
    }
  })
  return STACK[0] as number;
}

// powtarzaj dla token := weź_następny_token()
//     jeżeli token to liczba
//       odłóż token na stos
//     w przeciwnym wypadku jeżeli token to operator
//       argumenty := weź_tyle_liczb_ze_stosu_ile_wymaga_operator
//       wynik := argument1 operator argument2...
//     odłóż_wynik_na_stos()
//   zwróć_ostatnią_wartość_ze_stosu()
