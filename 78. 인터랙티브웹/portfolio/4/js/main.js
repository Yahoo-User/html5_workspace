console.clear();

const section = document.querySelector("#circle");
const articles = document.querySelectorAll("article");

console.log("section:", section);
console.log("articles:", articles);


for(let article of articles) {

    article.addEventListener("mouseenter", e => {
        console.clear();
        console.log(`<< mouseenter event triggered in the ${e.currentTarget.classList[0]}.`);

        section.style.animationPlayState = "paused";
    });

    article.addEventListener("mouseleave", e => {
        console.clear();
        console.log(`>> mouseleave event triggered in the ${e.currentTarget.classList[0]}.`);
        
        section.style.animationPlayState = "running";
    });

} // for-of (enhanced for)