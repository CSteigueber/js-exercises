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
        var tpl=document.getElementById("tpl-hero").innerHTML;
        var str="";
        var name_pos=143;
        var ego_pos=207;
        var skill_pos=293;
        console.log(tpl);
        console.log(tpl.slice(0,name_pos)+heroes[1].name+tpl.slice(name_pos,ego_pos)+heroes[1].alterEgo+tpl.slice(ego_pos,skill_pos)+heroes[1].abilities+tpl.slice(skill_pos,-1));
       /* heroes.forEach(hero => {
            str+=;
        });*/
    })
})();
