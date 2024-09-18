// (method) ParentNode.querySelector<Element>(selectors: string): Element (+2 overloads)
//     - Returns the first element that is a descendant of node that matches selectors.

// const item3 = document.querySelector('.item3');
// const item3 = document.querySelector('li.item3');
// const item3 = document.querySelector('ul > .item3');
const item3 = document.querySelector('ul > li.item3');

console.log(item3);

// -------

// (property) NonDocumentTypeChildNode.previousElementSibling: Element
//     - Returns the `first preceding sibling` that is an element, and `null` otherwise.

const item2 = item3.previousElementSibling;
console.log(item2);

// (property) NonDocumentTypeChildNode.nextElementSibling: Element
//     - Returns the `first following sibling` that is an element, and `null` otherwise.

const item4 = item3.nextElementSibling;
console.log(item4);

// -------

