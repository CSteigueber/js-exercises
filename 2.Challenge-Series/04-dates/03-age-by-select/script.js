/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    document.getElementById("run").addEventListener("click", function (){
        let dob_year= document.getElementById("dob-year").value;
        let dob_month= document.getElementById("dob-month").value;
        let dob_day= document.getElementById("dob-day").value;
        let date= new Date();
        let y=date.getFullYear();
        let m=date.getMonth()+1;
        let d=date.getDate();    
        let age=y-dob_year;
        if (m<dob_month ||(m==dob_month && d<dob_day)) age--;
        alert("You are "+age+" years old.");


    })

})();
