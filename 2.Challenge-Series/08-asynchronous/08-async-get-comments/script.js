/* becode/javascript
 *
 * /10-asynchronous/08-async-get-comments/script.js - 10.8: chargement d'articles et de commentaires (async/await)
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

async function posts (){
    res=await window.lib.getPosts();
    return res;
}

(() => {
    // your code here
    document.getElementById("run").addEventListener("click", async ()=>{
        var arr= await posts();
       // console.table(arr);
        arr.forEach(async function (element){
            var comments=[];
            let comment_obj= await window.lib.getComments(element.id);
            comment_obj.forEach(el => {
                comments.push(el.content);
            });
            element.comment=comments;
            console.log(element);
        });
    })
})();
