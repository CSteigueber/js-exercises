/* becode/javascript
 *
 * /06-dom/09-match-password-one/script.js - 6.9: vérification de mots de passe (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    document.getElementById("run").addEventListener("click", function(){
        let pas_one= document.getElementById("pass-one");
        let pas_two= document.getElementById("pass-two");
        if (pas_one.value!=pas_two.value){
            console.log("Nooooo!");
            pas_one.style.borderColor="red";
            pas_two.style.borderColor="red";
        }
    });

})();
