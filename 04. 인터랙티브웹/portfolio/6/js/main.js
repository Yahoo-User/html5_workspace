console.clear();

// ---

const section = document.querySelector("section");
const articles = document.querySelectorAll("article");

console.log('1. section:', section);
console.log('2. articles:', articles);

// ---

const length = articles.length - 1;
const degree = 45;

// ---

let index = 0;

for(let article of articles) {

    let pic = article.querySelector('.pic');

    // 8개의 각 패널을 45도 회전시키고, 각 패널을 세로축(Y축) 방향으로 위로 Viewport높이만큼 이동시킴. (***)
    article.style.transform = `rotate(${degree * index}deg) translateY(-100vh)`;

    // 8개의 각 패널의 배경이미지 각각 설정
    pic.style.backgroundImage = `url(img/member${index+1}.jpg)`;

    // ---

    let play    = article.querySelector('.inner > .txt > ul > li.play');
    let pause   = article.querySelector('.inner > .txt > ul > li.pause');
    let load   = article.querySelector('.inner > .txt > ul > li.load');

    // console.log('3. play:', play);
    // console.log('4. pause:', pause);
    // console.log('5. load:', load);

    // ---

    play.addEventListener('click', e => {
        console.clear();
        console.log('>>> play clicked...');

        let isActive = e.currentTarget.closest('article').classList.contains('on');
        console.log(`\t+ isActive: ${isActive}`);

        if(isActive) {

            // `HTMLElement.closest` : (***)
            // (method) Element.closest<String>(selector: String): HTMLElement (+2 overloads)
            //     Returns the `first (starting at element) inclusive ancestor` that matches selectors, and `null` otherwise. (***)

            // e.currentTarget.closest('article').querySelector('.pic').classList.add('on');    // OK
            // play.closest('article').querySelector('.pic').classList.add('on');               // OK
            article.querySelector('.pic').classList.add('on');                               // OK

            // e.currentTarget.closest('article').querySelector('.txt audio').play();           // OK
            // play.closest('article').querySelector('.txt audio').play();                      // OK
            article.querySelector('.txt audio').play();                                      // OK

        } // if
    });

    // ---

    pause.addEventListener('click', e => {
        console.clear();
        console.log('>>> pause clicked...');

        let isActive = e.currentTarget.closest('article').classList.contains('on');
        console.log(`\t+ isActive: ${isActive}`);

        if(isActive) {

            e.currentTarget.closest('article').querySelector('.pic').classList.remove('on');
            e.currentTarget.closest('article').querySelector('.txt audio').pause();

        } // if
    });

    // ---

    load.addEventListener('click', e => {
        console.clear();
        console.log('>>> load clicked...');

        let isActive = e.currentTarget.closest('article').classList.contains('on');
        console.log(`\t+ isActive: ${isActive}`);
        
        if(isActive) {

            e.currentTarget.closest('article').querySelector('.pic').classList.add('on');
            e.currentTarget.closest('article').querySelector('.txt audio').load();
            e.currentTarget.closest('article').querySelector('.txt audio').play();

        } // if
    });

    // ---

    ++index;

} // for-of (enhanced for)

// ---

const btnPrev = document.querySelector('.btnPrev');
const btnNext = document.querySelector('.btnNext');

console.log('6. btnPrev:', btnPrev);
console.log('7. btnNext:', btnNext);

// ---

function activation(index, list) {
    console.log(`activation(${index}, ${list}) invoked.`);

    for(let el of list) {
        el.classList.remove('on');
    } // for-of (enhanced for)

    list[index].classList.add('on');
} // activation

// ---

const audios = document.querySelectorAll('audio');

function initMusic() {
    for(let audio of audios) {
        audio.pause();
        audio.load();

        audio.parentElement.previousElementSibling.classList.remove('on');
    } // for-of (enhanced for)
} // initMusic

// ---

let active = 0;
let number = 0;

btnPrev.addEventListener('click', e => {
    console.clear();
    console.log('>>> btnPrev clicked ...');

    initMusic();

    ++number;

    section.style.transform = `rotate(${degree * number}deg)`;

    // ---

    (active == 0) ? active = articles.length - 1 : --active;

    activation(active, articles);
});

btnNext.addEventListener('click', e => {
    console.clear();
    console.log('>>> btnNext clicked ...');

    initMusic();

    --number;

    section.style.transform = `rotate(${degree * number}deg)`;

    // ---

    (active == articles.length - 1) ? active = 0 : ++active;

    activation(active, articles);
});

// ---









