const items = document.querySelectorAll(".list li > a");
console.log(items);

// -------

for (let item of items) {
    
    // console.log(item);

    item.addEventListener("click", e => {
        console.clear();
        console.group("MOUSECLICK", "(ES6)");

            console.time('Elapsed time');

            e.preventDefault();
            
            console.log(e.currentTarget.innerText);

            console.timeEnd('Elapsed time');

        console.groupEnd();
    });

} // for-of (enhanced for)