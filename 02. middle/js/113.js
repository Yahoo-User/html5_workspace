// (method) ParentNode.querySelector<Element>(selectors: string): Element (+2 overloads)
//  - Returns the `first element` that is a descendant of node that matches selectors.

const ul = document.querySelector(".list");
console.log(ul);

// -------

// (property) ParentNode.children: HTMLCollection
//  - Returns the child elements.

const items = ul.children;
console.log(items);

console.log(items[0]);
console.log(items[1]);
console.log(items[2]);
console.log(items[3]);
console.log(items[4]);          // undefined