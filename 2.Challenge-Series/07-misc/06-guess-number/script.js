/* becode/javascript
 *
 * /07-misc/06-guess-number/script.js - 7.6: jeu : trouver un nombre
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    var trys=0;
    var x=Math.ceil(Math.random()*100);
    var input=0;
    console.log(x);
    do{
        input=prompt("Guess thenumber!");
        trys++;
        switch (true){
           case input==x: alert("That's it! You needed "+trys+" guesses"); break;        
           case input>x:  alert("lower");                                  break;        
           case input<x:  alert("higher");                                 break;
        }
    
    }
    while (input!=x);

})();
