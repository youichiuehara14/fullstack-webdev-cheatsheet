x = 11;

var isPalindrome = function (x) {
  const firstNum = x;
  const secondNum = Number(String(x).split('').reverse().join(''));
  console.log(firstNum);
  console.log(String(x).split(''));
  return firstNum === secondNum;
};

console.log(isPalindrome(x));
// vs;
// x = 0;

// var isPalindrome = function (x) {
//   if (!x) return false;
//   const num = String(x);
//   const reverseNum = num.split('').reverse().join('');
//   return num === reverseNum;
// };

// console.log(isPalindrome(x));

// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.

const testArr = [1, 2, 3, 4];
const testArr2 = [2, 3, 4];
const numVer = Number(testArr.join(''));
const numVer2 = Number(testArr2.join(''));
console.log(numVer === numVer2);
