// (method) ParentNode.querySelector<Element>(selectors: string): Element (+2 overloads)
//  - Returns the `first element` that is a descendant of node that matches selectors.

const frame = document.querySelector("#wrap");
console.log(frame);

// -------

// const box1 = document.querySelector(".box1");
// const box1 = document.querySelector("article.box1");
// const box1 = document.querySelector("#wrap > .box1");
const box1 = document.querySelector("#wrap .box1");

console.log(box1);