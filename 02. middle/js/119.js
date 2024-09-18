console.clear();

// -------

const box = document.querySelector("#box");
console.log(box);

// -------

// ES6
// box.addEventListener("mouseenter", e => {
//     console.clear();
//     console.group("MOUSEENTER(ES6)");

//     console.log("this:", this);                 // this: window (BOM top-level object).
//     console.log("e.currentTarget:", e.currentTarget);         // e.currentTarget : object(box) that the event triggered.

//     // ** this != e.currentTaget in ES6 ** //
//     console.log('this == e.currentTarget:', this==e.currentTarget);     // false

//     // box.style.backgroundColor = 'hotpink';
//     e.currentTarget.style.backgroundColor = 'hotpink';

//     console.groupEnd();
// });

// -------

// ES5
box.addEventListener("mouseenter", function (e) {
    console.clear();
    console.group("MOUSEENTER(ES5)");

    console.log("this:", this);                             // this: object(box) that the event triggered.
    console.log("e.currentTarget:", e.currentTarget);       // e.currentTarget : object(box) that the event triggered.

    // ** this == e.currentTaget in ES6 ** //
    console.log('this == e.currentTarget:', this==e.currentTarget);     // true

    // this.style.backgroundColor = 'hotpink';
    e.currentTarget.style.backgroundColor = 'hotpink';
});

// -------

// ES6
// box.addEventListener("mouseleave", e => {
//     console.clear();
//     console.group("MOUSELEAVE(ES6)");

//     console.log('this:', this);                          // this: window (BOM top-level object).
//     console.log('e.currentTarget:', e.currentTarget);    // e.currentTarget : object(box) that the event triggered.

//     // ** this != e.currentTaget in ES6 ** //
//     console.log('this == e.currentTarget:', this==e.currentTarget);     // false

//     // box.style.backgroundColor = "aqua";
//     e.currentTarget.style.backgroundColor = 'aqua';

//     console.groupEnd();
// });

// -------

// ES5
box.addEventListener("mouseleave", function (e) {
    console.clear();
    console.group("MOUSELEAVE(ES5)");

    console.log('this:', this);                             // this: object(box) that the event triggered.
    console.log('e.currentTarget:', e.currentTarget);       // e.currentTarget : object(box) that the event triggered.

    // ** this != e.currentTaget in ES6 ** //
    console.log('this == e.currentTarget:', this==e.currentTarget);     // true

    // this.style.backgroundColor = "aqua";
    e.currentTarget.style.backgroundColor = 'aqua';
});

