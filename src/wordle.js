/* Function to add focus on the first square (Hebrew)
after DOM loaded */

function myFocus () {
    const firstSquare = document.querySelector('.firstSq');
    firstSquare.focus();
}

document.addEventListener('DOMContentLoaded', myFocus)

// window.onload = function() {
//     let firstSquare = document.getElementById("firstSq").focus()
// }