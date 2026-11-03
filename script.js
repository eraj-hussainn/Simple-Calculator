
function calculate() {

    var expression = screen.value;

    if (expression === "") {
        return;
    }

    var operator;
    var numbers;

    if (expression.includes("+")) {
        operator = "+";
    }
    else if (expression.includes("-")) {
        operator = "-";
    }
    else if (expression.includes("*")) {
        operator = "*";
    }
    else if (expression.includes("/")) {
        operator = "/";
    }
    else {
        return;
    }

    numbers = expression.split(operator);

    var num1 = Number(numbers[0]);
    var num2 = Number(numbers[1]);

    if (numbers[0] === "" || numbers[1] === "") {
        return;
    }

    if (operator === "+") {
        screen.value = num1 + num2;
    }
    else if (operator === "-") {
        screen.value = num1 - num2;
    }
    else if (operator === "*") {
        screen.value = num1 * num2;
    }
    else if (operator === "/") {

        if (num2 === 0) {
            screen.value = "Cannot divide by zero";
        }
        else {
            screen.value = num1 / num2;
        }

    }

}
