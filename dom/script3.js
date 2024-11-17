let input = document.querySelector(".input");

let btn1 = document.querySelector(".btn1");
let btn2 = document.querySelector(".btn2");
let btn3 = document.querySelector(".btn3");
let btn4 = document.querySelector(".btn4");
let btn5 = document.querySelector(".btn5");
let btn6 = document.querySelector(".btn6");
let btn7 = document.querySelector(".btn7");
let btn8 = document.querySelector(".btn8");
let btn9 = document.querySelector(".btn9");
let btn0 = document.querySelector(".btn0");
let btn_dot = document.querySelector(".btn_dot");

let ac = document.querySelector(".ac");
let equal = document.querySelector(".equal");
let first = document.querySelector(".first");
let sec = document.querySelector(".sec");
let three = document.querySelector(".three");
let fourth = document.querySelector(".fourth");

let currentInput = "";
let operator = "";
let previousInput = "";

function appendToInput(value) {
    currentInput += value;
    input.value = currentInput;
}

function clearInput() {
    currentInput = "";
    operator = "";
    previousInput = "";
    input.value = "";
}

function calculateResult() {
    if (operator && previousInput !== "") {
        currentInput = eval(previousInput + operator + currentInput).toString();
        input.value = currentInput;
    }
}

ac.addEventListener("click", function(e) {
    clearInput();
    e.target.style.backgroundColor = "green";
});

equal.addEventListener("click", function(e) {
    calculateResult();
    e.target.style.backgroundColor = "green";
});

btn0.addEventListener("click", function(e) {
    appendToInput("0");
    e.target.style.backgroundColor = "green";
});

btn1.addEventListener("click", function(e) {
    appendToInput("1");
    e.target.style.backgroundColor = "green";
});

btn2.addEventListener("click", function(e) {
    appendToInput("2");
    e.target.style.backgroundColor = "green";
});

btn3.addEventListener("click", function(e) {
    appendToInput("3");
    e.target.style.backgroundColor = "green";
});

btn4.addEventListener("click", function(e) {
    appendToInput("4");
    e.target.style.backgroundColor = "green";
});

btn5.addEventListener("click", function(e) {
    appendToInput("5");
    e.target.style.backgroundColor = "green";
});

btn6.addEventListener("click", function(e) {
    appendToInput("6");
    e.target.style.backgroundColor = "green";
});

btn7.addEventListener("click", function(e) {
    appendToInput("7");
    e.target.style.backgroundColor = "green";
});

btn8.addEventListener("click", function(e) {
    appendToInput("8");
    e.target.style.backgroundColor = "green";
});

btn9.addEventListener("click", function(e) {
    appendToInput("9");
    e.target.style.backgroundColor = "green";
});

btn_dot.addEventListener("click", function(e) {
    if (!currentInput.includes(".")) {
        appendToInput(".");
    }
    e.target.style.backgroundColor = "green";
});

first.addEventListener("click", function(e) {
    operator = "+";
	// appendToInput("+");
    previousInput = currentInput;
    currentInput = "";
    e.target.style.backgroundColor = "green";
});

sec.addEventListener("click", function(e) {
    operator = "-";
    previousInput = currentInput;
    currentInput = "";
    e.target.style.backgroundColor = "green";
});

three.addEventListener("click", function(e) {
    operator = "*";
    previousInput = currentInput;
    currentInput = "";
    e.target.style.backgroundColor = "green";
});

fourth.addEventListener("click", function(e) {
    operator = "/";
    previousInput = currentInput;
    currentInput = "";
    e.target.style.backgroundColor = "green";
});


