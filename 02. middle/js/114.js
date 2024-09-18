// (method) ParentNode.querySelector<Element>(selectors: string): Element (+2 overloads)
//     - Returns the first element that is a descendant of node that matches selectors.

const item2 = document.querySelector(".item2");
console.log(item2);

// -------

// (property) Node.parentElement: HTMLElement
//     - Returns the parent element.

const parent = item2.parentElement;
console.log(parent);

