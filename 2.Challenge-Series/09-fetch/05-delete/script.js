/* becode/javascript
 *
 * /09-fetch/05-delete/script.js - 11.5: supprimer un élément
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(async function() {
    // your code here
    var arr= await fetch("../../_shared/api.json");
    var preHeroes= await arr.json("/heroes");
    var heroes=preHeroes.heroes;
    console.table(heroes);
    document.getElementById("run").addEventListener("click", async function(){
        var id=document.getElementById("hero-id").value;
        for (let i=0; i<heroes.length;i++){
            if (heroes[i].id==id){
                heroes.splice(i,1);

            }
        }
        console.table(heroes);

    })
})();
