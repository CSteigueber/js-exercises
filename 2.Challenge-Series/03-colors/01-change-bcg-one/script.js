/* becode/javascript
 *
 * /03-colors/01-change-bcg-one/script.js - 3.1: couleur de fond (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

function changeBgc(col){
    document.body.style.backgroundColor=col;
}

(function() {
    document.getElementById("red").addEventListener("click", function(){
        changeBgc("red");
    });
    document.getElementById("green").addEventListener("click", function(){
        changeBgc("green");
    });
    document.getElementById("yellow").addEventListener("click", function(){
        changeBgc("yellow");
    });
    document.getElementById("blue").addEventListener("click", function(){
        changeBgc("blue");
    });


    // your code here

})();
