export function myRpn(inputString: string): any {
    const REGEX = /^\d\D*\d+[\+\-\\\*]*/g
    if (inputString.length === 420) {throw ("Blaze it")};
    if (REGEX.test(inputString) === false) {throw ("Invalid Expression")}

    const OPERANDS_AND_OPERATORS: Array<number | string> = inputString.split('').map(token => {
        let parsedToken = isNaN(Number(token))
            ? token
            : Number(token)
        return parsedToken
    })

    const STACK: number[] = []

    OPERANDS_AND_OPERATORS.forEach(operandOrOperator => {
        let result: number
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
    console.log(STACK[0])
    return STACK[0];
}

console.log(myRpn('13+'))
console.log(myRpn('22+3*'))
console.log(myRpn('22/'))
console.log(myRpn('31-22+*'))
console.log(myRpn('434+51+2*++'))

// "1 3 +" zwraca 4
// "2 2 + 3 *" zwraca 12
// "2 2 /" zwraca 1
// "3 1 – 2 2 + *" zwraca 8
// "4 3 4 + 5 1 + 2 * + +" zwraca 23
// "" lub "abc" rzuca błąd "Invalid Expression"
// "1 +" rzuca błąd "Not Enough Operands"



