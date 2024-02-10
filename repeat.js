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