/* becode/javascript
 *
 * /07-misc/01-waving-text/script.js - 7.1: effet vague
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

const wrapTagNFont =(content, font, tag)=>{
    return `<${tag} style="font-size: ${font}px;">${content}</${tag}>`;
}

(function() {
    let str= document.getElementById("target").innerHTML;
    let arr=[];
    for (let i=0; i<15; i++){
        let temp=str.slice(i*5,(i+1)*5);
        let font=0;
        let a=8;
        switch (true){
            case i<3: font=(1+i)*a;     break;
            case i<6: font=(6-i)*a;     break;
            case i<9: font=(i-6)*a;     break;
            case i<12: font=(13-i)*a;   break;
            case i<15: font=(i-9)*a;    break;
        }
       arr.push(wrapTagNFont(temp, font,"span"));

    }
    document.getElementById("target").innerHTML=arr.join("");

    // your code here

})();
