var firstNum = 0;
var operator;
var secondNum = 0;
//DOMS
var buttonOne = document.getElementById("1");
var buttonTwo = document.getElementById("2");
var buttonThree = document.getElementById("3");
var buttonFour = document.getElementById("4");
var buttonFive = document.getElementById("5");
var buttonSix = document.getElementById("6");
var buttonSeven = document.getElementById("7");
var buttonEight = document.getElementById("8");
var buttonNine = document.getElementById("9");
var buttonZero = document.getElementById("0");
var decimalButton = document.getElementById("decimal");
var addButton = document.getElementById("add-Op");
var subButton = document.getElementById("sub-Op");
var mulButton = document.getElementById("mul-Op");
var divButton = document.getElementById("div-Op");
var equalButton = document.getElementById("equal");
var clearButton = document.getElementById("C");
var delButton = document.getElementById("del");
var negOrPos = document.getElementById("neg-pos");
var lowerDisplay = document.getElementById("lower-display");
var upperDisplay = document.getElementById("upper-display");

//Listeners

buttonOne.addEventListener("click", () => (lowerDisplay.textContent += "1"));
buttonTwo.addEventListener("click", () => (lowerDisplay.textContent += "2"));
buttonThree.addEventListener("click", () => (lowerDisplay.textContent += "3"));
buttonFour.addEventListener("click", () => (lowerDisplay.textContent += "4"));
buttonFive.addEventListener("click", () => (lowerDisplay.textContent += "5"));
buttonSix.addEventListener("click", () => (lowerDisplay.textContent += "6"));
buttonSeven.addEventListener("click", () => (lowerDisplay.textContent += "7"));
buttonEight.addEventListener("click", () => (lowerDisplay.textContent += "8"));
buttonNine.addEventListener("click", () => (lowerDisplay.textContent += "9"));
buttonZero.addEventListener("click", () => (lowerDisplay.textContent += "0"));
delButton.addEventListener(
    "click",
    () =>
    (lowerDisplay.textContent = lowerDisplay.textContent.substring(
        0,
        lowerDisplay.textContent.length - 1
    ))
);
decimalButton.addEventListener("click", () => {
    if (
        !lowerDisplay.textContent.includes(".") ||
        !lowerDisplay.textContent
            .substring(lowerDisplay.textContent.indexOf(operator))
            .includes(".")
    ) {
        lowerDisplay.textContent += ".";
    }
});
addButton.addEventListener("click", () => {
    if (!doIEndWithAnOperator()) {
        lowerDisplay.textContent += "+";
        operator = "+";
    }
});
subButton.addEventListener("click", () => {
    if (!doIEndWithAnOperator()) {
        lowerDisplay.textContent += "-";
        operator = "-";
    }
});
mulButton.addEventListener("click", () => {
    if (!doIEndWithAnOperator()) {
        lowerDisplay.textContent += "*";
        operator = "*";
    }
});
divButton.addEventListener("click", () => {
    if (!doIEndWithAnOperator()) {
        lowerDisplay.textContent += "/";
        operator = "/";
    }
});
negOrPos.addEventListener("click", () => {
    let operandIndex;
    let operand;
    if (operator) {
        // If there's an operator, get the second operand
        operandIndex = lowerDisplay.textContent.indexOf(operator) + 1;
        operand = lowerDisplay.textContent.substring(operandIndex);
    } else {
        // If there's no operator, get the first operand
        operandIndex = 0;
        operand = lowerDisplay.textContent;
    }
    if (operand.startsWith("-")) {
        // If the operand is negative, make it positive
        operand = operand.slice(1);
    } else {
        // If the operand is positive, make it negative
        operand = "-" + operand;
    }
    // Update the lowerDisplay string with the updated operand
    // lowerDisplay.textContent.substring(0, operandIndex)
    // represents the first part of the equation which is num +
    // operand index itself is not included
    lowerDisplay.textContent =
        lowerDisplay.textContent.substring(0, operandIndex) + operand;
});
clearButton.addEventListener("click", () => {
    lowerDisplay.textContent = "";
    upperDisplay.textContent = "";
});
equalButton.addEventListener("click", operate);

//Functions
function doIEndWithAnOperator() {
    return lowerDisplay.textContent.endsWith(operator);
}
function operate() {
    var twoOperandsOneOperator = lowerDisplay.textContent.split(operator);
    firstNum = twoOperandsOneOperator[0];
    alert(twoOperandsOneOperator[1]);
    if (twoOperandsOneOperator[1] == undefined) {
        operator = "+";
        twoOperandsOneOperator[1] = 0;
        secondNum = 0;
    } else {
        secondNum = twoOperandsOneOperator[1];
    }
    if (
        twoOperandsOneOperator[1] == "" &&
        lowerDisplay.textContent.includes("--")
    ) {
        operator = "+";
        secondNum = twoOperandsOneOperator[2];
    }
    if (operator == "+") {
        lowerDisplay.textContent = Number(firstNum) + Number(secondNum);
    } else if (operator == "-") {
        lowerDisplay.textContent = Number(firstNum) - Number(secondNum);
    } else if (operator == "*") {
        lowerDisplay.textContent = Number(firstNum) * Number(secondNum);
    } else if (operator == "/") {
        if (Number(secondNum) == 0) {
            lowerDisplay.textContent = "Do not divide by ZERO !!!";
        } else {
            lowerDisplay.textContent = Number(firstNum) / parseFloat(secondNum);
        }
    }
    upperDisplay.textContent = `${firstNum} ${operator}  ${secondNum}`;
}
