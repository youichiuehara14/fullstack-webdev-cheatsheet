//===== Quick Review ====== //

// ================================================== Destructuring ================================================== \\

const person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 38,
  gender: 'Male',
};

console.log(person); // { firstName: 'John', lastName: 'Doe', age: 38, gender: 'Male' }

const { firstName, lastName, age, gender } = person;

console.log(firstName); // 'John'
console.log(lastName); //'Doe'
console.log(age); // 38
console.log(gender); // 'Male'

// ================================================== Destructuring ================================================== \\

//==================================================================================================================== \\

// ====================================================== Split  ====================================================== \\

const kpopIdol = 'Jennie Ruby Jane';

console.log(kpopIdol.split(' ')); // [ 'Jennie', 'Ruby', 'Jane' ]
console.log(kpopIdol.split('')); // [  'J', 'e', 'n', 'n', 'i', 'e', ' ', 'R', 'u', 'b', 'y', ' ', 'J', 'a', 'n', 'e']

//=========== Split with Limit =========== \\

const favoriteFood = 'Curry, Fries, Pizza, PopCorn, Rice, Lasagna';

console.log(favoriteFood.split(',', 2)); // [ 'Curry', ' Fries' ]
console.log(favoriteFood.split(',', 4)); // [ 'Curry', ' Fries', ' Pizza', ' PopCorn' ]

// =================Note==================

// split(',', 2)
// First argument: separator (string or regex) – tells where to split the string
// Second argument: limit (number) – max number of parts to return

// =================Note==================

//=========== Split with Limit =========== \\

// ====================================================== Split  ====================================================== \\
