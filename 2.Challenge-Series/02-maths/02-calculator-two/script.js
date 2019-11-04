/* becode/javascript
 *
 * /02-maths/02-calculator-two/script.js - 2.2: calculatrice (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

function calculator(operator) {
    var a=parseInt(document.getElementById("op-one").value);
    var b=parseInt(document.getElementById("op-two").value);
    switch (operator){
        case "+":
            alert(a + b);
            break;
        case "-":
            alert(a - b);
            break;
        case "*":
            alert(a * b);
            break;
        case "/":
            alert(a / b);
            break;
    }

}
(function buttons() {
   let add= document.getElementById("addition");
   add.addEventListener("click", function (){calculator("+")});

    let sub= document.getElementById("substraction");
    sub.addEventListener("click", function (){calculator("-")});

    let mul=document.getElementById("multiplication");
    mul.addEventListener("click", function (){calculator("*")});

    let div=document.getElementById("division");
    div.addEventListener("click", function (){calculator("/")});
})();

//addEventListener fires unintentionally when I use a function reference alone. If I use an anonymous function which calls a function reference all is fine.
// Devil knows why...