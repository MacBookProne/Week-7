// #1 array of ages
let ages = [3, 9, 23, 64, 2, 8, 28, 93];

// Calculate the difference between the last and first elements in the array
let result = ages[ages.length - 1] - ages[0];

// Print 
console.log(result);

// Add a new age to the end of the array
ages.push(69);
// Print 
console.log(ages);

// Initialize a variable to hold the sum of all ages
let sum = 0;

// Loop through each age 
for (let i = 0; i < ages.length; i++) {
    // Add the current age to the sum
    sum += ages[i];
}

// Calculate the average age by dividing the total sum by the number of elements in the array
let average = sum / ages.length;
// Print 
console.log(average);

