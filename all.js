
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



// #2 Initialize an array of names
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

// #3 How do you access the last element of any array? 

//You access the last element of an array by using the length propertyy of the array and subtract 1 from it. 


// #4 How do you access the first element of any array?
// You access the first element of an array by referring to its index number in the array which is 0. 

// #5 Initialize an array of names
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




// #6 Assuming namesLengths is already defined as [3, 5, 3, 5, 4, 3]
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



 
// #7 Define a function that repeats a given word 'n' times
function repeatWord(word, n) {
  // Initialize an empty string 
  let result = "";
  // Loop 'n' times
  for (let i = 0; i < n; i++) {
    // Concatenate the word to the result string in each iteration
    result += word;
  }
  // Return the  string
  return result;
}

// Call the function with 'Hello' as the word to repeat and '3' as the number of repetitions
console.log(repeatWord('Hello', 3));




// #8 Define a function to concatenate two strings
function concatenateNames(firstPart, secondPart) {
    // Print
    console.log(firstPart + ' ' + secondPart);
  }
  
  // Call the concatenateNames function with example names
  concatenateNames("Jane", "Doe");
  
  // #9  Define a function that checks if the sum of numbers in an array exceeds 100
  function checkSumExceeds(arr) {
    // Initialize sum 
    let sum = 0;
    // Iterate through the array
    for (let i = 0; i < arr.length; i++) {
      // Increment sum by the current array element
      sum += arr[i];
      // Check if sum exceeds 100
      if (sum > 100) {
        // Print 
        console.log(true);
        return;
      }
    }
  }
  
  //example array
  checkSumExceeds([1,90,5,80]);


// 10 Define a function that calculates the average of an array of numbers
function someFunction(arr) {
  // Initialize sum to accumulate the values of the array elements
  let sum = 0;
  // Iterate through the array
  for (let i = 0; i < arr.length; i++) {
    // Increment sum by the current array element
    sum += arr[i];
  }
  // Calculate the average by dividing the sum by the number of elements
  console.log(sum / arr.length);
}

// Call someFunction with an example array
someFunction([1, 90, 5, 80]);



// #11 Define a function to compare the averages of two arrays
function someFunction(arr1, arr2) {
  // Initialize variables to hold the sums of each array
  let sum1 = 0, sum2 = 0;

  // Loop through the first array and sum its elements
  for(let i = 0; i < arr1.length; i++) {
    sum1 += arr1[i];
  }

  // Loop through the second array and sum its elements
  for(let y = 0; y < arr2.length; y++) {
    sum2 += arr2[y];
  }

  // Calculate the average 
  let avg1 = sum1 / arr1.length;
  let avg2 = sum2 / arr2.length;

  // Compare the averages and print true if avg1 is greater than avg2
  if(avg1 > avg2) {
    console.log(true);
  } else {
    // Otherwise, print false
    console.log(false);
  }
}

// Call the function with two example arrays to compare their averages
someFunction([1, 90, 5, 80], [2, 50, 6, 20]);



// #12 Define a function to determine if a drink will be bought
function willBuyDrink(isHotOutside, moneyInPocket) {
  // Check if it's hot outside and money in pocket is at least 10.50
  if (isHotOutside === true && moneyInPocket >= 10.50) {
    // If both conditions are met, print true
    console.log(true);
  } else {
    // If any condition is not met, print false
    console.log(false);
  }
}

// Call the function with conditions that meet the criteria for buying a drink
willBuyDrink(true, 12);


// #13 Purpose: Calculate how much to save each week to reach a savings goal within a certain timeframe.

function calculateWeeklySavings(goalAmount, currentSavings, weeks) {
  // Calculate the remaining amount to save
  let remaining = goalAmount - currentSavings;
  // Calculate weekly savings needed
  let weeklySavings = remaining / weeks;
  return weeklySavings;
}

// call
let weeklyAmount = calculateWeeklySavings(2000, 200, 8);
console.log(`Justin needs to Save ${weeklyAmount} each week to reach his goal.`);
