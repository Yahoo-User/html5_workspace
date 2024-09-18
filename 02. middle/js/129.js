console.clear();

// -------

const link = document.querySelector("a");
console.log('1. link:', link);

// -------

let newHref = "http://www.daum.net";
link.setAttribute("href", newHref);

// -------

console.log(`2. href: ${link.getAttribute("href")}`);




