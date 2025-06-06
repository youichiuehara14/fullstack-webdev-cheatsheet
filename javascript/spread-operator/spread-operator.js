//#1 Unpacking (Spread) with Array
const arrNum = [1, 2, 3, 4, 5];

// Using spread operator to copy the array
const unpack = [...arrNum];

console.log(unpack); // [1, 2, 3, 4, 5]

//-------------------------------------------------------------

//#2 Unpacking (Spread) with Object
const objectSample = {
  firstName: 'John',
  lastName: 'Doe',
  age: 28,
  country: 'Philippines',
};

// Using spread operator to copy the object
const storeObject = { ...objectSample };

console.log(storeObject);
/*
{
  firstName: 'John',
  lastName: 'Doe',
  age: 28,
  country: 'Philippines'
}
*/

//-------------------------------------------------------------

//#3 Shallow Copy vs Deep Copy

//! Shallow Copy – Example #1 (Top-level properties)
const original = { name: 'Floran' };

// Shallow copy creates a new object for top-level properties
const shallowCopy = { ...original };

// Modifying the shallow copy's property
shallowCopy.name = 'Max';

console.log(original); // { name: 'Floran' } – original not affected
console.log(shallowCopy); // { name: 'Max' } – modified copy

//! Shallow Copy – Example #2 (Nested objects)
const uniqueData = {
  name: 'Jane',
  location: {
    country: 'Philippines',
    province: 'Laguna',
    city: 'San Pedro',
  },
};

// This is still a shallow copy – only the top-level is copied
const shallowNestedCopy = { ...uniqueData };

// Changing nested property in the copy
shallowNestedCopy.location.city = 'Sta. Rosa';
shallowNestedCopy.name = 'Youichi';

console.log(uniqueData);
/*
{
  name: 'Jane',                   name remains unchanged
  location: {
    country: 'Philippines',
    province: 'Laguna',
    city: 'Sta. Rosa'             city changed in both objects
  }
}
*/

// Why? Because `location` is an object, and it was copied **by reference**,
// so both `uniqueData` and `shallowNestedCopy` share the same nested object.

//-------------------------------------------------------------

//#4 Deep Copy Example (real deep clone)
const realDeepCopy = JSON.parse(JSON.stringify(uniqueData));

// This time we change a nested property
realDeepCopy.location.province = 'Youichi';

console.log(uniqueData);
/*
{
  name: 'Jane',
  location: {
    country: 'Philippines',
    province: 'Laguna',
    city: 'Sta. Rosa'
  }
}
*/

console.log(realDeepCopy);
/*
{
  name: 'Jane',
  location: {
    country: 'Philippines',
    province: 'Youichi',
    city: 'Sta. Rosa'
  }
}
*/

//Deep copy creates a fully independent clone – even nested properties are safe!
