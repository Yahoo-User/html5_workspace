console.clear();

var heading = document.querySelector('#heading');
console.log('heading:', heading);

// ---------

heading.onclick = function (e) {
    console.clear(); console.log('onclicked ...');
    console.log('this:', this);                     // heading

    heading.style.color = 'red';                 // OK
    // this.style.color = 'red';                    // OK
    // e.currentTarget.style.color = 'red';         // OK
};  // .onclick

// ---------

// heading.addEventListener('click', function (e) {
//     console.clear(); console.log('onclicked ...');
//     console.log('this:', this);                         // heading

//     heading.style.color = 'blue';                    // OK
//     // this.style.color = 'red';                        // OK
//     // e.currentTarget.style.color = 'red';             // OK
// }); // .addEventListener

// ---------

// heading.addEventListener('click', e => {
//     console.clear(); console.log('clicked ...');
//     console.log('this:', this);                         // window (***)

//     // heading.style.color = 'purple';                     // OK
//     // this.style.color = 'purple';                        // XX (**)
//     e.currentTarget.style.color = 'purple';             // OK
// }); // .addEventListener
