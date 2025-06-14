// ==========================================================
//🟢 #1 - Unpacking Arrays using Spread Operator
// ==========================================================

const arrNum = [1, 2, 3, 4, 5];

const unpackedArray = [...arrNum];  //🔷 Spread operator creates a shallow copy of the array

console.log('Unpacked Array:', unpackedArray); //🔷 Unpacked Array: [1, 2, 3, 4, 5]

// ----------------------------------------------------------

// ==========================================================
//🟢 #2 - Unpacking Objects using Spread Operator
// ==========================================================

const objectSample = {
  firstName: 'John',
  lastName: 'Doe',
  age: 28,
  country: 'Philippines',
};

const copiedObject = { ...objectSample }; //🔷 Spread operator creates a shallow copy of the object

console.log('Copied Object:', copiedObject); //🔷 Copied Object: { firstName: 'John', lastName: 'Doe', age: 28, country: 'Philippines' }

// ----------------------------------------------------------

// ==========================================================
//🟢 #3 - Shallow Copy vs Deep Copy
// ==========================================================

//🔶 Example 1 - Shallow Copy with Top-Level Properties
const original = { name: 'Floran' };

const shallowCopy = { ...original };
shallowCopy.name = 'Max';

console.log('Original (Top-Level):', original); //🔷 { name: 'Floran' }
console.log('Shallow Copy (Modified):', shallowCopy); //🔷 { name: 'Max' }

//🔶 Example 2 - Shallow Copy with Nested Objects
const uniqueData = {
  name: 'Jane',
  location: {
    country: 'Philippines',
    province: 'Laguna',
    city: 'San Pedro',
  },
};

const shallowNestedCopy = { ...uniqueData };

shallowNestedCopy.location.city = 'Sta. Rosa';
shallowNestedCopy.name = 'Smith';

console.log('Original (Nested Modified):', uniqueData); //🔷 { name: 'Jane', location: { country: 'Philippines', province: 'Laguna', city: 'Sta. Rosa' } }

console.log('Shallow Copy (Nested Modified):', shallowNestedCopy); //🔷 { name: 'Smith', location: { country: 'Philippines', province: 'Laguna', city: 'Sta. Rosa' } }

//🔷 Note: Nested objects are still shared (reference), not fully copied

// ----------------------------------------------------------

// ==========================================================
//🟢 #4 - Deep Copy using JSON methods
// ==========================================================

const realDeepCopy = JSON.parse(JSON.stringify(uniqueData));

realDeepCopy.location.province = 'Smith';

console.log('Original after Deep Copy:', uniqueData); //🔷 { name: 'Jane', location: { country: 'Philippines', province: 'Laguna', city: 'Sta. Rosa' } }

console.log('Deep Copy (Modified):', realDeepCopy); //🔷 { name: 'Jane', location: { country: 'Philippines', province: 'Smith', city: 'Sta. Rosa' } }

//🔷 Deep copy creates a fully independent clone, including nested objects
