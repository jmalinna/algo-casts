// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
// SOLUTION 1
//   const splitString = str.split('');
//   let result = [];

//   for (let i = splitString.length - 1; i >= 0; i -= 1) {
//     result.push(splitString[i])
//   }

//   console.log('final result=', result.join(''))
//   return result.join('');

// SOLUTION 2
//   return str
//     .split('')
//     .reverse()
//     .join('');

// SOLUTION 3
//   let reversedString = '';
//   for (const char of str) {
//     reversedString = char + reversedString;
//   }
//   console.log('reversedString=', reversedString)
//   return reversedString;

// SOLUTION 4
  return str.split('').reduce((acc, char) => {
    console.log('acc=', acc)
    return char + acc;
  }, '');
}

reverse('apple')
module.exports = reverse;
