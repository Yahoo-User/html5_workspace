// (method) ParentNode.querySelector<Element>(selectors: string): Element (+2 overloads)
//  - Returns the `first element` that is a descendant of node that matches selectors.

// const article = document.querySelector("#wrap > article");
const article = document.querySelector('#wrap  article');

console.log(article);

// -------

// (method) ParentNode.querySelectorAll<Element>(selectors: string): NodeListOf<Element> (+2 overloads)
//     - Returns all element descendants of node that match selectors.

// const articles = document.querySelectorAll("#wrap article");
const articles = document.querySelectorAll("#wrap > article");

console.log(articles);

// -------

console.log(articles[0]);
console.log(articles[1]);
console.log(articles[2]);
console.log(articles[3]);           // undefined
console.log(articles[4]);           // undefined

// -------

for (let article of articles) {
    console.log(article);
}   // for-of (enhanced for)

// -------

for(let i=0;i<articles.length;i++) {
    console.log(articles[i]);
}   // for

