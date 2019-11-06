/* becode/javascript
 *
 * /07-misc/05-worst-ui-three/script.js - 7.5: la pire interface (3) : phone slot
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.
var b=[];
var v=[];
b[0]=document.getElementById("fix-part-one");
b[1]=document.getElementById("fix-part-two");
b[2]=document.getElementById("fix-part-three");
b[3]=document.getElementById("fix-part-four");

v[0]=document.getElementById("part-one");
v[1]=document.getElementById("part-two");
v[2]=document.getElementById("part-three");
v[3]=document.getElementById("part-four");

const hitButton =(index)=>{
    let min= parseInt(v[index].getAttribute("data-min"));
    let max= parseInt(v[index].getAttribute("data-max"));
    let res=Math.ceil(Math.random()*(max-min))+min;
    if (res<10) res="0"+res;
    v[index].setAttribute("value",res);
    v[index].innerHTML=res.toString();

}

const printTarget= ()=>{
    let res="";
    for (let i=0; i<v.length; i++){
        res+=v[i].getAttribute("value");
    }
    document.getElementById("target").innerHTML="+"+res;
}
const createButtons= ()=>{
    for (let j=0; j<b.length; j++){
        b[j].addEventListener("click", function (){
            hitButton(j);
            printTarget();
        })
    }
}

(function() {

    // your code here
    createButtons();

})();
