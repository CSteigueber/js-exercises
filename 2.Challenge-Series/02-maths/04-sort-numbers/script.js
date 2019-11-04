/* becode/javascript
 *
 * /02-maths/04-sort-numbers/script.js - 2.4: classer des nombres
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // to get the value of an input: document.getElementById("element-id").value

    let str= document.getElementById("numbers").value;
    let arr=[];
    for (let i=0; i<str.length; i++){
        arr[i]=parseInt(str[i]);
    }
    document.getElementById("run").addEventListener("click", function() {
        // your code here
        console.log(arr);
        arr=arr.sort(function (a,b){return a-b});
        console.log(arr);
        alert(arr);
       /* let el=document.getElementById("numbers");
        el.innerHTML="Howdie, partner!";*/
    });

})();
