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
    var res=0;
    switch (operator){
        case "+":
            res=a + b;
            break;
        case "-":
            res=a - b;
            break;
        case "*":
            res=a * b;
            break;
        case "/":
            res=a / b;
            break;
    }
    console.log("I just used "+operator);
    alert(res);
}
function buttons() {
    console.log("Howdie partner!");
   let add= document.getElementById("addition");
   add.addEventListener("click",alert(calculator("+")));
    let sub= document.getElementById("substraction");
    sub.addEventListener("click",alert(calculator("-")));
    let mul=document.getElementById("multiplication");
    mul.addEventListener("click",alert(calculator("*")));
    let div=document.getElementById("division");
    div.addEventListener("click",alert(calculator("/")));
}

buttons ();