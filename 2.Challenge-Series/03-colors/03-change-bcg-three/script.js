/* becode/javascript
 *
 * /03-colors/03-change-bcg-three/script.js - 3.3: couleur de fond (3)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    document.getElementById('run').addEventListener("click", function (){
        let x=[];
        for (let i=0; i<6; i++){
            x[i]=Math.floor(Math.random()*16).toString(16);
        }
        console.log(x);

        let str=x.join("");
        console.log(str);
        document.body.style.backgroundColor="#"+str;
    })

})();
