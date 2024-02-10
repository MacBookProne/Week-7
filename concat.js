// Initialize an array of names
let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];

// Initialize a string to hold the concatenated names, starting with a space
let concat = " ";
// Loop through each name in the array
for (let i = 0; i < names.length; i++) {
  // Add the current name to the concatenated string
  concat += names[i];
  // If this is not the last name, add a comma and space for formatting
  if (i < names.length - 1) {
    concat += ", ";
  }
}
// Print 
console.log(concat);
