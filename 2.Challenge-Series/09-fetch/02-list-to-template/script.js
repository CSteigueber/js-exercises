/* becode/javascript
 *
 * /09-fetch/02-list-to-template/script.js - 11.2: liste vers template
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    document.getElementById("run").addEventListener("click",async function(){
        var arr= await fetch("../../_shared/api.json");
        var preHeroes= await arr.json("/heroes");
        //console.table(heroes.heroes);
        var heroes=preHeroes.heroes;
        //console.log(heroes[1]);
        var str="";
        heroes.forEach(hero => {
            str+=`<li><h4><strong>${hero.name}`
        });
    })
})();
