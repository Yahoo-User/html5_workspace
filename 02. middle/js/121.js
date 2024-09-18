let clickNumber = 0;

// -------

const btnPlus = document.querySelector(".btnPlus");
const btnMinus = document.querySelector(".btnMinus");

// -------

btnPlus.addEventListener("click", e => {
    console.clear();
    console.group("btnPlus");

    e.preventDefault();

    btnMinus.style.backgroundColor = 'darkslategray';
    btnPlus.style.backgroundColor = 'hotpink';

    console.log('clickNumber:', ++clickNumber);

    console.groupEnd();
});

// -------

btnMinus.addEventListener("click", e => {
    console.clear();
    console.group("btnMinus");

    e.preventDefault();

    btnPlus.style.backgroundColor = 'darkslategray';
    btnMinus.style.backgroundColor = 'hotpink';

    console.log('clickNumber:', ((clickNumber > 0)? --clickNumber : 0));

    console.groupEnd();
});
