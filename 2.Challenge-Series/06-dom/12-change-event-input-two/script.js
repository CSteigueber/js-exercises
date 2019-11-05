/* becode/javascript
 *
 * /06-dom/12-change-event-input-two/script.js - 6.12: événement change (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

const countNum = (str) =>{
    let res=0;
    for (let i=0; i<str.length; i++){
        switch (str[i]){
            case "1": res++; break;
            case "2": res++; break;            
            case "3": res++; break;
            case "4": res++; break;
            case "5": res++; break;
            case "6": res++; break;
            case "7": res++; break;
            case "9": res++; break;
            case "9": res++; break;
            case "0": res++; break;            
        }
    }
    return res;
}

(function() {

    // your code here
    document.getElementById("pass-one").addEventListener("input", function() {
        let str=document.getElementById("pass-one").value;
        let nums=countNum(str);
        if (str.length>=8 && nums>=2){document.getElementById("validity").innerHTML="OK";}
        else {document.getElementById("validity").innerHTML="not OK";}
    })

})();
