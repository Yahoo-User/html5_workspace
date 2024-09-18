console.clear();

// -------

const btns = document.querySelectorAll(".btns li");
const articles = document.querySelectorAll("section > article");

console.log('1. btns:', btns);
console.log('2. articles:', articles);

// -------

for(let i=0;i<btns.length;i++) {

    btns[i].addEventListener('click', e => {
        activation(i, btns);
        activation(i, articles);
    });

} // for

// -------

function activation(index, list) {
    console.clear();
    console.group('activation');

    console.log(`activation(${index}, ${list}) invoked.`);

    // Step1. collection 의 모든 요소 비활성화 (***)
    for(let item of list) {
        item.classList.remove("on");
    } // for-of (enhanced for)

    console.log('1. All items are disabled.');

    // Step2. collection 의 요소중, index에 해당하는 요소만 활성화 (***)
    list[index].classList.add("on");
    console.log(`2. list[${index}] enabled.`);
    
    console.groupEnd();
} // activation
