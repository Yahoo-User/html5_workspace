// (method) ParentNode.querySelector<Element>(selectors: string): Element (+2 overloads)
//     - Returns the `first element` that is a descendant of node that matches selectors.

const box = document.querySelector('#box');
console.log(box);

// -------

console.log(box.style);

// -------

box.style.width = "30%";
box.style.height = "300px";
box.style.backgroundColor = "hotpink";
box.style.border = "none";
box.style.transform = "rotate(45deg)";
