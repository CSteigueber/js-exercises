/* becode/javascript
 *
 * /05-arrays/11-dedupe-array/script.js - 5.11: dédoublonnement d'un tableau
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    var fruits = [
        "cerise",
        "durian",
        "pomme",
        "poire",
        "fraise",
        "tomate",
        "orange",
        "mandarine",
        "fraise",
        "durian",
        "pêche",
        "cerise",
        "raisin",
        "cerise",
    ];

    // your code here
    document.getElementById("run").addEventListener("click", function (){
        console.log("Using the Set object:");
        console.log(Array.from(new Set(fruits)));
        let new_arr=[];
        for (let i=0; i<fruits.length; i++){
            if (new_arr.indexOf(fruits[i])==-1) new_arr.push(fruits[i]);
        }
        console.log(new Set(fruits));
        console.log("Witht the for loop:");
        console.log(new_arr);
    })

})();
