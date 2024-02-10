// Initialize an array of names
let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];

// Initialize a variable to hold the sum of the lengths of all names
let sumLengths = 0;
// Loop through each name in the array
for (let i = 0; i < names.length; i++) {
    // Add the length of the current name to the sum
    sumLengths += names[i].length;
}

// Calculate the average length of the names by dividing the total sum by the number of names
let averageLength = sumLengths / names.length;
// Print 
console.log(averageLength);