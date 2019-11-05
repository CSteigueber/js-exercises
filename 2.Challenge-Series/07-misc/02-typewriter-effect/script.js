/* becode/javascript
 *
 * /07-misc/02-typewriter-effect/script.js - 7.2: effet machine à écrire
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

var index=0;
var delay =Math.random()*250;

const typewriter = (str)=>{
    let temp=str.slice(0,index%255);
    document.getElementById("target").innerHTML=temp;
    console.log(index+" "+temp+" delay: "+delay);
    index++;
    delay=Math.random()*250;

}


(function() {

    // your code here
    var str=document.getElementById("target").innerHTML;
    console.log(str.length);
   /* for (let i=0; i<str.length; i++){
        let delay= 250;
        setTimeout(function () {typewriter(str,i)},delay);
    }*/
    setInterval(() => {
        typewriter(str)        
    }, delay);



})();
