// function aclean(arr) {
//   let map = new Map();

//   for (let x of arr) {
//     let y = x
//       .toLowerCase()
//       .split('')
//       .sort((a, b) => (a < b ? 1 : -1))
//       .join('');
//     map.set(y, x);
//   }
//   return Array.from(map.values()).sort;
// }

// let arr = ['nap', 'teachers', 'cheaters', 'PAN', 'ear', 'era', 'hectares'];

// console.log(aclean(arr.reverse()));

// //https://javascript.info/map-set

// ---------------------------------------------------------------------------------------------------------------------
// We’d like to get an array of map.keys() in a variable and then do apply array-specific methods to it, e.g. .push.

// But that doesn’t work:

let map = new Map();

map.set('name', 'John');

let keys = Array.from(map.keys()); // convert to an array using Array.from

keys.push('more');

console.log(keys);

// That’s because map.keys() returns an iterable, but not an array.

// We can convert it into an array using Array.from:
