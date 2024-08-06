const a = 0;
const b = 0;
const operator = ""

const operate = (a, b, operator) => {
    if (operator === "+") {
        return a + b;
    } else if (operator === "-") {
        return a - b;
    } else if (operator === "*") {
        return a * b;
    } else if (operator === "/") {
        return a / b;
    } else {
        return "Error";
    }
}
console.log(operate(7, 3, "+"));

