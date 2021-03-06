/* becode/javascript
 *
 * /10-asynchronous/02-get-comments/script.js - 10.2: chargement d'articles et de commentaires
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    document.getElementById("run").addEventListener("click",()=>{
        window.lib.getPosts((error, arr)=>{
            if (error) console.log("Something went wrong!");
            else{
                arr.forEach(element => {
                    window.lib.getComments(element.id,(error, comment_obj)=>{
                        let comment=[];
                        if (error) console.log("Something went wrong!");
                        else {
                        comment_obj.forEach(element => {
                            comment.push(element.content);
                        });
                        }
                        element.comment=comment;
                    })
                });
            console.log(arr);
            }
        })
    })
})();
