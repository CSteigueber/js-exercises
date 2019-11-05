/* becode/javascript
 *
 * /05-arrays/09-rand-array-stats/script.js - 5.9: tableau aléatoire & statistiques
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

const createArry =()=>{
    var arr=[];
    for (let i=0; i<10; i++){
        arr[i]=Math.ceil(Math.random()*100);
    }
    return arr;
}
const printArray = (arr)=>{
    for (let i=0; i<arr.length; i++){
        let str="n-"+(i+1);
        document.getElementById(str).innerHTML=arr[i];
    }
}
const printStats = (arr)=>{
    document.getElementById("min").innerHTML=Math.min(... arr);
    document.getElementById("max").innerHTML=Math.max(...arr);
    
    let sum=0;
    let average=0;
    for (let i=0; i<arr.length;i++) sum+=arr[i];
    average=sum/arr.length;
    document.getElementById("sum").innerHTML=sum;
    document.getElementById("average").innerHTML=average;    
}

(function() {

    // your code here
    document.getElementById("run").addEventListener("click", function (){
        var arr=createArry();
        console.log(arr);
        printArray(arr);
        printStats(arr);

    })

})();
