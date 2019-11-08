/* becode/javascript
 *
 * /09-fetch/03-details/script.js - 11.3: details
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.


(() => {
    // your code here
    document.getElementById("run").addEventListener("click", async function(){
        var arr=await fetch("../../_shared/api.json");
        var preHeroes= await arr.json("/heroes");
        var hero=preHeroes.heroes;
        //console.table(heroes);
        var id= document.getElementById("hero-id").value-1;
        var tpl=document.getElementById("tpl-hero").innerHTML;
        var str="";
        var name_pos=143;
        var ego_pos=207;
        var skill_pos=293;
        
        str+=tpl.slice(0,name_pos)+hero[id].name;
        str+=tpl.slice(name_pos,ego_pos)+hero[id].alterEgo;
        str+=tpl.slice(ego_pos,skill_pos)+hero[id].abilities;
        str+=tpl.slice(skill_pos,0);;

        document.getElementById("target").innerHTML=str;
    })
})();
