const numberToLetter = {'0': ' '};
// Create an object of key/value pairs such as 1: A, 2: B, and so on
for (let i = 1; i <= 26; i++) {
    numberToLetter[i] = String.fromCharCode(64 + i);
}
numberToLetter['0'] = ' ';
function decode(signal) {
  const numbers = signal.split(' ');
  let decodedMessage = '';

  for (const num of numbers) {
    decodedMessage += numberToLetter[num] ? numberToLetter[num] : '?';
  }

  return decodedMessage;
}

const signal = "20 1 11 5 0 13 5 0 20 15 0 25 15 21 18 0 12 5 1 4 5 18";
const decodedMessage = decode(signal);
console.log(decodedMessage);  // Output: HELLO
