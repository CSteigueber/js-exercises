/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here

})();
do{
    var age=prompt("What is your age?");
    var gender=prompt("What is your gender?");
    var home=prompt( "Where do you live?");
    var result=confirm(`You are ${age} years old, ${gender} and live in ${home}. Is that correct?`);
}
while (result==false);
