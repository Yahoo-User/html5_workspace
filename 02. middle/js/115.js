// (method) ParentNode.querySelector<"li">(selectors: "li"): HTMLLIElement (+2 overloads)
//     - Returns the first element that is a descendant of node that matches selectors.

const li = document.querySelector("li");
// const li = document.querySelector("main > section > article > ul > li");

console.log(li);

// -------

// (method) Element.closest<"main">(selector: "main"): HTMLElement (+2 overloads)
//     - Returns the `first (starting at element) inclusive ancestor` that matches selectors, and null otherwise.

const main = li.closest("main");
// const main = li.closest("main2");             // null

console.log(main);

