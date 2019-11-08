/* becode/javascript
 *
 * /09-fetch/04-add/script.js - 11.4: ajouter un élément
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.



(async function() {
    // your code here
    var arr = await fetch("../../_shared/api.json");
    var preHeroes=await arr.json("/heroes");
    var heroes=preHeroes.heroes;
    document.getElementById("run").addEventListener("click",async function(){


       
        var h_name=document.getElementById("hero-name").value;
        var h_ego= document.getElementById("hero-alter-ego").value;
        var h_powers= document.getElementById("hero-powers").value.split(",");
        var hero= {id: heroes.length+1, name:h_name, alterEgo:h_ego, abilities:h_powers};
        heroes.push(hero);
        console.table(heroes);


    })
})();
