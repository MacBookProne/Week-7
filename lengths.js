// Assuming namesLengths is already defined as [3, 5, 3, 5, 4, 3]
let namesLengths = [3, 5, 3, 5, 4, 3];

// Initialize a variable 
let sum = 0;
// Loop through each length in the namesLengths array
for (let i = 0; i < namesLengths.length; i++) {    
  // Add each length to the sum variable
  sum += namesLengths[i];    
}
// Print 
console.log(sum);