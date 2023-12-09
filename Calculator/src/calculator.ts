function calculator(firstNum: number, operator: string, secondNum: number): void {

    let result: number = 0;

    switch (operator) {
        case "+": result = firstNum + secondNum; break;
        case "-": result = firstNum - secondNum; break;
        case "*": result = firstNum * secondNum; break;
        case "/": result = firstNum / secondNum; break;
    }

    console.log(result.toFixed(2));
}

calculator(25.5, "-", 3)