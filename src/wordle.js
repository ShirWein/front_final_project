/* Function to add focus on the first square (Hebrew)
after DOM loaded */

function myFocus () {
    const firstSquare = document.querySelector('.firstSq');
    firstSquare.focus();
}

document.addEventListener('DOMContentLoaded', myFocus);

/* Function(s) to check if input is an Hebrew letter & only one */

// function check() {

// }
// function inputValid  () {
//     let pattern = /[\u0590-\u05FF]/
//     const inp = document.getElementsByTagName('input');
//     inp.test(pattern);
// }

function inputValid  () {
    let pattern = RegExp("^[\u0590-\u05FF]+$");
    let inp = document.querySelectorAll('input');
    for (let i = 0; i <= (inp.length);  i++) {
        inp[i].setAttribute('maxLength',1);
        inp[i].setAttribute('index',i);
        let next = inp.index;
        if (inp[i].maxLength === 1) {
            if (next < document.querySelector('.board').length) {
                document.querySelector('.board').elements[next].focus();
            }
        }
    }
}




// function checkLength(x, y) {
//     if (y.length == x.maxLength) {
//       let next = x.tabIndex;
//       if (next < document.getElementsByClassName(".board").length) {
//         document.getElementById(".board").elements[next].focus();
//       }
//     }
//   }

// function inputValid  () {
//     let pattern = "/[\u0590-\u05FF]/";
//     let inp = document.getElementsByTagName('input');
//     return (/[\u0590-\u05FF]/).test(inp);
// }  

document.addEventListener('keyup', inputValid);