/* becode/javascript
 *
 * /06-dom/08-generate-table-two/script.js - 6.8: génération d'un tableau (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

const wrapWithTags=(content, tag)=>{
    return `<${tag}>${content}</${tag}>`;
}

const createTable = ()=>{
    let str="";
    for (let i=1; i<=10;i++){
        str+="<tr>";
        for (let ii=1; ii<=10;ii++){
            str+=`<td>${i*ii}</td>`;
        }
        str+="</tr>";
    }
    return str;
}

(function() {

    // your code here
    var el=document.getElementById("target");
    el.innerHTML=wrapWithTags(createTable(),"table");
})();
