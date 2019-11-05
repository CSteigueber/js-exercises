/* becode/javascript
 *
 * /06-dom/05-hover-image/script.js - 6.5: survol d'image
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    var element=document.getElementsByTagName("img")[0];
    var att=element.getAttribute("data-hover");
    console.log(att);
    element.addEventListener("mouseover", function(){
        element.setAttribute("src",att);

    })
    // your code here

})();
