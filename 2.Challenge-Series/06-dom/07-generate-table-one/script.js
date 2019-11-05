/* becode/javascript
 *
 * /06-dom/07-generate-table-one/script.js - 6.7: génération d'un tableau (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

const wrapWithTags = (content, tag)=>{
    return `<${tag}>${content}</${tag}>`;
}
const makeTable =(content, n)=>{
    let str=content;
    let res="";
    for (let i=0; i<n; i++){
        res+="<tr><td>"+content+"</td></tr>";
    }
    return res;
}

(function() {
    document.getElementById("target").innerHTML=wrapWithTags(makeTable("empty cells are boring",10), "table");
    // your code here

})();
