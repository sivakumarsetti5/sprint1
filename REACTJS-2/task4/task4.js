const input = [1, 2, 3, 4, 1, 8, 7, 2, 3, 4, 5];

// Step 1: Find the maximum value in the array
const maxValue = Math.max(...input);

// Step 2: Find the first occurrence index of the maximum value
const firstMaxIndex = input.indexOf(maxValue);

// Step 3: Create a new array with elements after the first occurrence of the max value
const elementsAfterMax = input.slice(firstMaxIndex + 1);

// Step 4: Filter the elements to get the unique elements that are greater than the max value
const output = [...new Set(elementsAfterMax.filter(element => element > maxValue))];

console.log(output); 
