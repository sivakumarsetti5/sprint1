// const input="nnniiiittnnnitt" ;
// output=n6i5t4
// Hint: Each character should fallow, how many times it was repeated.


const input = "nnniiiittnnnitt";
const counts = {};

// Count occurrences of each character
for (const char of input) {
    counts[char] = (counts[char] || 0) + 1;
}

// Build the output string
let output = '';
for (const [char, count] of Object.entries(counts)) {
    output += char + count;
}

console.log(output);