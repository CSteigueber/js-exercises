/* becode/javascript
 *
 * /06-dom/10-match-password-two/script.js - 6.10: vérification de mots de passe (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    document.getElementById("run").addEventListener("click", function () {
        let pas_one=document.getElementById("pass-one");
        let pas_two=document.getElementById("pass-two");
        if (pas_one.value!=pas_two.value){
            pas_one.setAttribute("class",pas_one.getAttribute("class")+" error");
            pas_two.setAttribute("class",pas_two.getAttribute("class")+" error");
        }
    })

})();
