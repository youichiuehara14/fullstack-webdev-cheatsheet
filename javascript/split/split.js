//=======================================================================
//Split: Transform a string into an array              ================
//=======================================================================

//#1 Split with a String (Single Word)
const coffee = 'Espresso';
console.log(coffee.split('')); // Output ==> ['E', 's', 'p', 'r', 'e', 's', 's', 'o']

//=======================================================================
//#2 Split with a String (Multiple Words)                ================
//=======================================================================

const quote = "It's never too late to be who you might have been";
// 💡 To split a sentence into individual words (each word in its own index),
// use a space character (' ') inside the split method.
// In simple terms: every time a space is found, it creates a new array element.

console.log(quote.split(' ')); // Output ==> ["It's", 'never', 'too', 'late', 'to', 'be', 'who', 'you', 'might', 'have', 'been'];

//=======================================================================
//#2 Split with a number                                 ================
//=======================================================================
// ❌ You can't split a value with a type of number directly,
// you have to convert it to a string first and turn it into an array with the split method and then
// you can do whatever you plan to do with it next.
//=======================================================================

const num = 123456789;
const arrNumString = String(num).split('');
console.log(String(num).split(''));
console.log(arrNumString); // Output ==>[ '1', '2', '3', '4', '5', '6', '7', '8', '9' ]

// You can also use the .map method to iterate each item and convert it into a different value type
// here, you can see that in the .map, it only pass the "Number" function, because of that, it can iterate to every index without doign the general syntax for the .map
const arrNum = arrNumString.map(Number);
console.log(arrNum);

console.log(arrNum.map(String));
