/*
 * Print a minimum number from a multi-dimensional array
 * Input: 2 5 8
 *        2 7 4
 *        5 6 1
 * Output: 1
 */
// 01. Define the multi-dimensional array
const array = [
  [2, 5, 8],
  [2, 7, 4],
  [5, 6, 1],
];
// 02. Function to find and print the minimum value
function printMin(str) {
  // 03. Initialize min with a high value
  let min = 999;
  // 04. Loop through the rows of the array
  for (let i = 0; i < str.length; i++) {
    // 05. Loop through the columns of the current row
    for (let j = 0; j < str[1].length; j++) {
      // 06. Update min if the current element is smaller
      if (str[i][j] < min) min = str[i][j];
    }
  }
  // 07. Print the minimum value found
  console.log('Min value is: ', min);
}

// 08. Call the function with the defined array
printMin(array);
