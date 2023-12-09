function printAndSum(startNum: number, secondNum: number): void {
    const output: number[] = [];
    let result: number = 0;
    for (let i = startNum; i <= secondNum; i++) {
        output.push(i);
        result += i;
    }
    console.log(`${output.join(" ")}`);
    console.log(`Sum: ${result}`);
}

// printAndSum(5, 10);
// printAndSum(0, 26);
printAndSum(50, 60);