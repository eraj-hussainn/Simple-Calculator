
const screen = document.getElementById("screen");


// ADD VALUE FUNCTION

function appendValue(value) {

    screen.value += value;

}


// CLEAR SCREEN FUNCTION

function clearScreen() {

    screen.value = "";

}


// DELETE LAST VALUE

function deleteLast() {

    screen.value = screen.value.slice(0, -1);

}


// CALCULATE FUNCTION

function calculate() {

    if (screen.value === "") {
        return;
    }

    try {

        screen.value = eval(screen.value);

    }

    catch {

        screen.value = "Error";

        setTimeout(function() {

            screen.value = "";

        }, 1000);

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

        calculate();

    }

    else if (key === "Backspace") {

        deleteLast();

    }

    else if (key === "Escape") {

        clearScreen();

    }

});
// if (
//     screen.value.endsWith("+") ||
//     screen.value.endsWith("-") ||
//     screen.value.endsWith("*") ||
//     screen.value.endsWith("/")
// ) {
//     return;
// }