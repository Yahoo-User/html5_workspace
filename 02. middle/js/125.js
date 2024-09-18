console.clear();

// -------

const wrap = document.querySelector('#wrap');
const box  = document.querySelector('#wrap article');

console.log(`1. wrap :`, wrap);
console.log('\t+ wrap.classList :', wrap.classList);

console.log(`2. box  :`, box);

// -------

/* NOT recommened for JS to directly changes CSS style of some elements in the manner of `inline style`
   like the below. */

// ES6
// wrap.addEventListener('click', e => {
//     box.style.backgroundColor = 'hotpink';
//     // e.currentTarget.style.backgroundColor = 'hotpink';
// });

// ES5
// wrap.addEventListener('click', function (e) {
//    this.style.backgroundColor = 'hotpink';
// //    e.currentTarget.style.backgroundColor = 'hotpink'; 
// });

// -------

/* Recommended for JS to indirectly make class attributes to change CSS style of some elements. */

// ES6
wrap.addEventListener('click', e => {
    console.clear();
    console.group('wrap clicked.');

    // (property) Element.classList: DOMTokenList
    //  Allows for manipulation of element's class content attribute
    //  as a set of whitespace-separated tokens through a DOMTokenList object.

    // 1st. method
    wrap.classList.toggle('on');

    // ---

    // 2nd. method
    // let isOn = wrap.classList.contains('on');
    // if(isOn)
    //     wrap.classList.remove('on')
    // else
    //     wrap.classList.add('on')

    // ---

    // 3rd. method
    // let isOn = wrap.classList.contains('on');
    // (isOn) ? wrap.classList.remove('on') : wrap.classList.add('on');

    console.log('wrap.classList:', wrap.classList);
    console.groupEnd();
});

