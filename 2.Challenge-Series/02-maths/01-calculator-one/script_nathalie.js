/* becode/javascript
 *
 * /02-maths/01-calculator-one/script.js - 2.1: calculatrice
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    // to get the value of an input: document.getElementById("element-id").value

    document.getElementById("addition").addEventListener("click", function() {
        number1 = document.getElementById("op-one");
        number2 = document.getElementById("op-two");

        operator = parseInt(number1.value) + parseInt(number2.value);

        console.log(operator);


        result = document.getElementById("result");
        result.innerText = operator;


        // perform an addition
    });

    document.getElementById("substraction").addEventListener("click", function() {

        number1 = document.getElementById("op-one");
        number2 = document.getElementById("op-two");

        operator = parseInt(number1.value) - parseInt(number2.value);

        console.log(operator);


        result = document.getElementById("result");
        result.innerText = operator;
        // perform an substraction
    });

    document.getElementById("multiplication").addEventListener("click", function() {

        number1 = document.getElementById("op-one");
        number2 = document.getElementById("op-two");

        operator = parseInt(number1.value) * parseInt(number2.value);

        console.log(operator);


        result = document.getElementById("result");
        result.value = operator;
        result.setAttribute("value",operator);
        console.log("howdie partner!");
        // perform an multiplication
    });

    document.getElementById("division").addEventListener("click", function() {

        number1 = document.getElementById("op-one");
        number2 = document.getElementById("op-two");

        operator = parseInt(number1.value) / parseInt(number2.value);

        console.log(operator);

        result = document.getElementById("result");
        result.innerText = operator;
        // perform an division
    });
})();