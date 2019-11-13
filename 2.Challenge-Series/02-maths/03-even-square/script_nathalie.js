/* becode/javascript
 *
 * /02-maths/03-even-square/script.js - 2.3: carrés des pairs
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.



let pressButton = document.getElementById("run");


pressButton.addEventListener(("click"), function() {

    for (i = 1; i <= 21; i++) {
        let sqNumbers = Math.ceil(Math.sqrt(i)); // Using the square root (i^0.5) instead of square number (i^2)
        console.log(sqNumbers);
        let text = "square number: " + sqNumbers + "<br>";
        document.write(text); // I wouldn't use this method. It's output is ugly!
    }

})