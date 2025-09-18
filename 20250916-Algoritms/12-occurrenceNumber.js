/*
 * Click `Run` to execute the snippet below!
 */

/*
 * Count the number of occurrences
 * Input: aabcbabcacbabce
 * Output: a5b5c4e1
 */
console.log('=== Count the Number of Occurrences ===');

// 01. Input string and show
const input = 'aabcbabcacbabce';
console.log(`Input : ${input}`);

// 02. Sort the input string
const sorted = input.split('').sort().join('');
console.log(`Sorted: ${sorted}`);

// 03. Function to count occurrences
function countOccurrences(str) {
  // 04. Object to hold character counts
  const occurrences = {};
  // 05. Loop through each character in the string
  for (const char of str) {
    occurrences[char] = (occurrences[char] || 0) + 1;
  }
  // 06. Show the occurrences object and return it
  console.log('Object:', occurrences);
  // Occurrences object:{ a: 5, b: 5, c: 4, e: 1 }
  return occurrences;
}

// 07. Convert occurrences object to the desired output format
function formatOccurrences(occurrences) {
  return Object.entries(occurrences)
    .map(([char, count]) => `${char}${count}`)
    .join('');
}

// 08. Call the functions for Count and format occurrences
const occurrences = countOccurrences(sorted);
const output = formatOccurrences(occurrences);

// 09. Output the result
console.log(`Output: ${output}`);

