const btnLeft = document.querySelector('.btnLeft');
const btnRight = document.querySelector('.btnRight');
const box = document.querySelector('#box');

const degree = 45;
let number = 0;

// -------

console.clear();

// -------

// ES6 - this: BOM window top-level object.
btnLeft.addEventListener('click', e => {
    console.clear();

    e.preventDefault();

    --number;
    console.log(`btnLeft clicked, number: ${number}`);

    box.style.transform = `rotate(${number * degree}deg)`;
    // e.currentTarget.style.transform = `rotate(${number * degree}deg)`;
});

// -------

// ES6 - this: BOM window top-level object.
btnRight.addEventListener('click', e => {
    console.clear();

    e.preventDefault();

    ++number;
    console.log(`btnRight clicked, number: ${number}`);

    box.style.transform = `rotate(${number * degree}deg)`;
    e.currentTarget.style.transform = `roate(${number * degree}deg)`;
});