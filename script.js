
const screen = document.getElementById("screen");


// APPEND VALUE

function appendValue(value) {

    screen.value += value;

}


// CLEAR SCREEN

function clearScreen() {

    screen.value = "";

}


// DELETE LAST CHARACTER

function deleteLast() {

    screen.value = screen.value.slice(0, -1);

}


// CALCULATE

function calculate() {

    var expression = screen.value;

    if (expression === "") {
        return;
    }

    var operator = "";
// .include check wether the character is present or not (works like a boolean)
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

    else if (expression.includes("%")) {
        operator = "%";
    }

    else {
        return;
    }


    var numbers = expression.split(operator);

    if (numbers.length !== 2 || numbers[0] === "" || numbers[1] === "") {
        return;
    }

    var num1 = Number(numbers[0]);
    var num2 = Number(numbers[1]);


    if (isNaN(num1) || isNaN(num2)) {
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

    else if (operator === "%") {

        if (num2 === 0) {
            screen.value = "Cannot divide by zero";
        }

        else {
            screen.value = num1 % num2;
        }

    }

}


// KEYBOARD SUPPORT

document.addEventListener("keydown", function(e) {

    var key = e.key;

    if (
        (key >= "0" && key <= "9") ||
        key === "+" ||
        key === "-" ||
        key === "*" ||
        key === "/" ||
        key === "." ||
        key === "%"
    ) {

        appendValue(key);

    }

    else if (key === "Enter") {

        e.preventDefault();
        calculate();

    }

    else if (key === "Backspace") {

        deleteLast();

    }

    else if (key === "Escape") {

        clearScreen();

    }

});
