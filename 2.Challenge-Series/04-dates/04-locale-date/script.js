/* becode/javascript
 *
 * /04-dates/04-locale-date/script.js - 4.4: date textuelle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"

    // your code here
    let date= new Date();
    let y=date.getFullYear();
    let m=date.getMonth();
    let d=date.getDate();
    let wd=date.getDay();
    let h=date.getHours();
    let min=date.getMinutes();
    let wk_str="";
    let m_str="";
    switch (wd){
        case 1:    wk_str="Monday";   break;
        case 2:    wk_str="Tuesday";  break;
        case 3:    wk_str="Wednesday";break;
        case 4:    wk_str="Thursday"; break;
        case 5:    wk_str="Friday";   break;
        case 6:    wk_str="Saturday"; break;
        case 7:    wk_str="Sunday";   break;
    }
    switch (m){
        case 1:     m_str="January";    break;
        case 2:     m_str="February";   break;
        case 3:     m_str="March";      break;
        case 4:     m_str="April";      break;
        case 5:     m_str="May";        break;
        case 6:     m_str="June";       break;
        case 7:     m_str="Juli";       break;
        case 8:     m_str="August";     break;
        case 9:     m_str="September";  break;
        case 10:    m_str="October";    break;
        case 11:    m_str="November";   break;
        case 12:    m_str="December";   break;
    }
    document.getElementById("target").innerHTML=wk_str+" "+d+" "+m_str+" "+y+", "+h+"h"+min;
})();
