"use strict";
function printAndSum(startNum, secondNum) {
    const output = [];
    let result = 0;
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
//# sourceMappingURL=printAndSum.js.map