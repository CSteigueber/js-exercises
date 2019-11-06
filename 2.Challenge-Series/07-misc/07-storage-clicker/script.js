/* becode/javascript
 *
 * /07-misc/07-storage-clicker/script.js - 7.7: jeu : clicker persistant
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

var target=document.getElementById("target");
if (localStorage.getItem("store")){
    target.innerHTML=localStorage.getItem("store");
}
(function() {

    // your code here
    document.getElementById("increment").addEventListener("click", function (){
        target.innerHTML++;
        localStorage.setItem("store",target.innerHTML);
    })
    document.getElementById("reset").addEventListener("click", function(){
        window.localStorage.clear();
        target.innerHTML=0;
    })

})();
