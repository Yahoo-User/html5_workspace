console.clear();

// ---

var sum = 0;

for (var i = 1; i <= 10; i++) {
    if (i % 2 != 0) continue;

    sum = sum + i;
    // sum += i;

    document.write(`${i}`, ' -------- ', `${sum}`, '<br>');
} // for

// ---

console.log(`sum = ${sum}`);

