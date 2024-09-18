const myName = 'Yoseph';
const myAge = 23;
const isMale = true;
const myWeight = 58.9;
const myArray = [ 1, 2, 3, 4, 5 ];

const myObj = { 
    name: 'Yoseph',
    age: 23,
    isMale: true
};

// -------

console.clear();
console.group('typeof');

    console.log(`1. typeof myName   : ${typeof myName}`);
    console.log(`2. typeof myAge    : ${typeof myAge}`);
    console.log(`3. typeof isMale   : ${typeof isMale}`);
    console.log(`4. typeof myWeight : ${typeof myWeight}`);
    console.log(`5. typeof myArray  : ${typeof myArray}`);
    console.log(`6. typeof myObject : ${typeof myObj}`);
    console.log(`7. typeof myTTT    : ${typeof myTTT}`);        // undefined (***)

console.groupEnd();
