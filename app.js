const business = [
  { name: "Prime", category: "Finance", start: 1981, revenue: 24 },
  { name: "Marspoint", category: "Retail", start: 1992, revenue: 28 },
  { name: "Aces", category: "Auto", start: 1999, revenue: 17 },
  { name: "Hurricane Lighting", category: "Retail", start: 1989, revenue: 10 },
  { name: "Eclipse", category: "Technology", start: 2009, revenue: 11 },
  { name: "Globestar", category: "Finance", start: 1987, revenue: 16 },
  { name: "Vertex", category: "Auto", start: 1986, revenue: 16 },
  { name: "Silverstar", category: "Technology", start: 2011, revenue: 21 },
  { name: "Ravenworks", category: "Retail", start: 1981, revenue: 19 },
];

//Filter Methods | Array.prototype.filter() -------------------------
// The filter() method creates a new array with all elements that pass the test implemented by the provided function.

const fileredTypes = business.filter((e) => {
  return e.category === "Auto";
});
console.log("fileredTypes", fileredTypes);

//Map Method -------------------------
// The map() method creates a new array with the results of calling a function for every array element.
const mappedTypes = business.map((e) => {
  return e.start;
});
console.log("mappedTypes", mappedTypes);

// Find Method -------------------------
// The find() method returns the value of the first element in an array that pass a test (provided as a function).
const findTypes = business.find((e) => {
  return e.name === "Eclipse";
});
console.log("findTypes", findTypes);

// forEach Method -------------------------
// The forEach() method executes a provided function once for each array element.
business.forEach((e) => {
  console.log("forEach - Name:", e.name);
});

// Some Method -------------------------
// The some() method tests whether at least one element in the array passes the test implemented by the provided function. It returns a Boolean value.
const someTypes = business.some((e) => {
  return e.start >= 2019;
});
console.log("someTypes", someTypes);

// Every Method -------------------------
// The every() method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.
const everyTypes = business.every((e) => {
  return e.start >= 1981;
});
console.log("everyTypes", everyTypes);

// Reduce Method -------------------------
// The reduce() method reduces the array to a single value.
//This method executes a provided function for each value of the array (from left-to-right).
const revenueTotal = business.reduce((currentTotal, e) => {
  return e.revenue + currentTotal;
}, 0);
console.log("revenueTotal", revenueTotal);

// Includes Method -------------------------
//The includes() method determines whether an array contains a specified element. Returning true or false as appropriate.
const includesTypes = business.includes(1);
console.log("revenueTotal", includesTypes);

//---------------------------------------------------------------------------
// Common operations
//---------------------------------------------------------------------------

// Access an Array item using the index position
let first = fruits[0];
// Apple
let last = fruits[fruits.length - 1];
// Banana

//---------------------------------------------------------------------------
// Add an item to the end of an Array
let newLength = fruits.push("Orange");
// ["Apple", "Banana", "Orange"]

//---------------------------------------------------------------------------
// Remove an item from the end of an Array
let last = fruits.pop(); // remove Orange (from the end)
// ["Apple", "Banana"]

//---------------------------------------------------------------------------
// Remove an item from the beginning of an Array
let first = fruits.shift(); // remove Apple from the front
// ["Banana"]

//---------------------------------------------------------------------------
// Add an item to the beginning of an Array
let newLength = fruits.unshift("Strawberry"); // add to the front
// ["Strawberry", "Banana"]

//---------------------------------------------------------------------------
// Find the index of an item in the Array
fruits.push("Mango");
// ["Strawberry", "Banana", "Mango"]
let pos = fruits.indexOf("Banana");
// 1

//---------------------------------------------------------------------------
// Remove an item by index position
let removedItem = fruits.splice(pos, 1); // this is how to remove an item
// ["Strawberry", "Banana", "Mango"] ---> ["Strawberry", "Mango"]

//
// More -> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
