/*
 * Click `Run` to execute the snippet below!
 */

/*
 * Count the number of occurrences
 * Input: aabcbabcacbabce
 * Output: a5b5c4e1
 */

// 01. Input text and show
const input = 'aabcbabcacbabce';
console.log('Input text: ', input);
// 02. Sort the text and show
const sort = input.split('').sort().join('');
console.log('Sorted text:', sort);
// 03. Two arrays to for char and count
let char = [sort[0]];
let count = [0];
let k = 0;
// 04. Loop to count occurrences
for (let i = 0; i < sort.length; i++) {
  // 05. If the current char is the same as the next, or if there is no next, increment count
  if (sort[i] === sort[i + 1] || !sort[i + 1]) {
    k = char.length - 1;
  } // 06. Else, push the next char to char array and initialize its count to 0
  else {
    char.push(sort[i + 1]);
    count.push(0);
  }
  // 07. Increment the count of the current char
  count[k]++;
}

// 08. Build the result string
let output = '';
// 09. Loop through char and count arrays to create the output string
for (let i = 0; i < char.length; i++) {
  output = output + char[i] + count[i];
}
// 10. Show the result
console.log(output);
