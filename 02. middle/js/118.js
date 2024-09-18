console.clear();

// -------

// (method) ParentNode.querySelector<Element>(selectors: string): Element (+2 overloads)
//  - Returns the `first element` that is a descendant of node that matches selectors.

const naver = document.querySelector("#naver");
console.log(naver);

const daum = document.querySelector("#daum");
console.log(daum);

// -------

// (method) HTMLAnchorElement.addEventListener<keyof HTMLElementEventMap>(
//     type: keyof HTMLElementEventMap,
//     listener: (this: HTMLAnchorElement, ev: Event | ProgressEvent<EventTarget> | ... 16 more ... | WheelEvent) => any, 
//     options?: boolean | AddEventListenerOptions
// ): void (+1 overload)

daum.addEventListener( "click", () => console.log(">>> DAUM clicked ...") );

// -------

naver.addEventListener("click", e => {
    e.preventDefault();

    console.log(">>> NAVER clicked ...");
    console.log(e);
});

