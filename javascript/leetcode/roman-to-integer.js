var romanToInt = function (s) {
  const romanMap = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let total = 0;

  console.log(s.length);
  //with the romanMap[s[i]] : what is actually looks like is like romanMap['MCMXCIV'[1]]
  console.log(romanMap['MCMXCIV'[0]]);
  for (let i = 0; i < s.length; i++) {
    let current = romanMap[s[i]];
    let next = romanMap[s[i + 1]];

    if (current < next) {
      total += next - current;
      i++;
    } else {
      total += current;
    }
  }

  return total;
};

console.log(romanToInt('MCMXCIV'));
// console.log(romanToInt('LVIII'));

// const romanMap = {
//   I: 1,
//   V: 5,
//   X: 10,
//   L: 50,
//   C: 100,
//   D: 500,
//   M: 1000,
// };

// console.log(romanMap['V']);
// Important Notes / Reminder

// 1. String can be accessed using brackets []
//    ex: 'Coffee'[0]
//        => Output: 'C'

//    Even if the string is inside a variable already,
//    then it'll look like this:

//    const drink = 'Coffee';
//    console.log(drink[0])
//    => Output: 'C'

// const testObj = {
//   name: 'Youichi',
// };

// console.log(romanMap[(7)['I']]);
// console.log(testObj.name);
// console.log('Coffee'[0]);
// console.log('MCMXCIV'[0]);

const product = {
  201812121: 'keyboard',
  201812122: 'Mouse',
};

const extractProduct = product[201812121];
console.log(extractProduct);

const studentInfo = {
  201812121: { name: 'Youichi', age: 28 },
};

const getStudent = studentInfo[201812121];
console.log(getStudent);

console.log(Object.values(studentInfo));
console.log(Object.keys(studentInfo));
console.log(studentInfo);
