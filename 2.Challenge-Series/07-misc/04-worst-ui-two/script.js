/* becode/javascript
 *
 * /07-misc/04-worst-ui-two/script.js - 7.4: la pire interface (2) : phone clicker
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

var target=document.getElementById("target");
var part_one=document.getElementById("part-one");
var part_two=document.getElementById("part-two");
var part_three=document.getElementById("part-three");
var part_four=document.getElementById("part-four");


const printTarget=()=>{
    let one=parseInt(part_one.innerHTML);
    if (one<10) one="0"+one;

    let two=parseInt(part_two.innerHTML);
    if (two<10) two="0"+two;

    let three=parseInt(part_three.innerHTML);
    if (three<10) three="0"+three;

    let four=parseInt(part_four.innerHTML);
    if (four<10) four="0"+four;  

    target.innerHTML="+"+one+two+three+four;
}

const hitButton = (button)=>{
    let min = button.getAttribute("data-min");
    let max = button.getAttribute("data-max");
    if (button.innerHTML>=max) button.innerHTML=min;
    else button.innerHTML++;
}

(function() {
    
    // your code here
    part_one.addEventListener("click", function (){
        hitButton(part_one);
        printTarget();
    })    
    part_two.addEventListener("click", function (){
        hitButton(part_two);
        printTarget();
    })
    part_three.addEventListener("click", function (){
        hitButton(part_three);
        printTarget();
    })
    part_four.addEventListener("click", function (){
        hitButton(part_four);
        printTarget();
    })

})();
