console.clear();

// -------

console.log('1. BOM navigator:', navigator);
console.log('2. User Agent:', navigator.userAgent);

// -------

// (method) `RegExp`.test(string: string): boolean  (***)
//  - Returns a `Boolean` value that indicates whether or not a pattern exists in a searched string.
//  - @param string — String on which to perform the `search`.

// const isEdge = /Edg/i.test(navigator.userAgent);
const isEdge = /edg/i.test(navigator.userAgent);
console.log(`3. isEdge: ${isEdge}`);

// alert(`isEdge: ${isEdge}`);


