  // #9 Define a function that checks if the sum of numbers in an array exceeds 100
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
  