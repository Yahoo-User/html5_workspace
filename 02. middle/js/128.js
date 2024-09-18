console.clear();

// -------

const link = document.querySelector("a");
console.log('1. link:', link);

// -------

// (method) Element.getAttribute(qualifiedName: string): string
//     Returns element's `first` attribute whose qualified name is qualifiedName,
//     and `null` if there is no such attribute otherwise. (***)

const hrefAttr = link.getAttribute("href");
console.log('2. hrefAttr:', hrefAttr);

// -------

// (method) Element.getAttributeNames(): string[]
//     Returns the `qualified names` of `all` element's attributes.
//     Can contain duplicates.

const allAttrNames = link.getAttributeNames();
console.log('3. allAttrNames:', allAttrNames);

for(let attrName of allAttrNames) {
    console.log(`\t+ ${attrName}: ${link.getAttribute(attrName)}`);
} // for-of (enhanced for)

// -------

console.log(`Unknown attribute: ${link.getAttribute("unknown")}`);      // null (***)




