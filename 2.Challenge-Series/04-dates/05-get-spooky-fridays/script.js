/* becode/javascript
 *
 * /04-dates/05-get-spooky-fridays/script.js - 4.5: calcul des vendredi 13
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    document.getElementById("run").addEventListener("click", function (){
        let year=parseInt(document.getElementById("year").value);
        let res=[];
        for (let i=0;i<12;i++){
            let date= new Date (year,i,13);
            let wk=date.getDay();
            let str="";
            if (wk==5){
                switch (i+1){
                    case 1: str="January";      break;
                    case 2: str="February";     break;
                    case 3: str="March";        break;
                    case 4: str="April";        break;
                    case 5: str="May";          break;
                    case 6: str="June";         break;
                    case 7: str="July";         break;
                    case 8: str="August";       break;
                    case 9: str="September";    break;
                    case 10: str="October";     break;
                    case 11: str="November";    break;
                    case 12: str="December";    break;
                }
                res.push(str);
            }
        }
        alert(res);
        
    })
        

})();
