const business = [
  { name: 'Prime', category: 'Finance', start: 1981, revenue: 24 },
  { name: 'Marspoint', category: 'Retail', start: 1992, revenue: 28 },
  { name: 'Aces', category: 'Auto', start: 1999, revenue: 17 },
  { name: 'Hurricane Lighting', category: 'Retail', start: 1989, revenue: 10 },
  { name: 'Eclipse', category: 'Technology', start: 2009, revenue: 11 },
  { name: 'Globestar', category: 'Finance', start: 1987, revenue: 16 },
  { name: 'Vertex', category: 'Auto', start: 1986, revenue: 16 },
  { name: 'Silverstar', category: 'Technology', start: 2011, revenue: 21 },
  { name: 'Ravenworks', category: 'Retail', start: 1981, revenue: 19 },
];
const businessRevenue = [
  { name: 'Prime', revenue: 24 },
  { name: 'Marspoint', revenue: 28 },
  { name: 'Aces', revenue: 17 },
  { name: 'Hurricane Lighting', revenue: 10 },
  { name: 'Eclipse', revenue: 11 },
  { name: 'Globestar', revenue: 16 },
  { name: 'Vertex', revenue: 16 },
  { name: 'Silverstar', revenue: 21 },
  { name: 'Ravenworks', revenue: 19 },
];

//Filter Methods | Array.prototype.filter() -------------------------
// The filter() method creates a new array with all elements that pass the test implemented by the provided function.

const fileredTypes = business.filter((e) => {
  return e.category === 'Auto';
});
console.log('fileredTypes', fileredTypes);

//Map Method -------------------------
// The map() method creates a new array with the results of calling a function for every array element.
const mappedTypes = business.map((e) => {
  return e.start;
});
console.log('mappedTypes', mappedTypes);

// Find Method -------------------------
// The find() method returns the value of the first element in an array that pass a test (provided as a function).
const findTypes = business.find((e) => {
  return e.name === 'Eclipse';
});
console.log('findTypes', findTypes);

// forEach Method -------------------------
// The forEach() method executes a provided function once for each array element.
business.forEach((e) => {
  console.log('forEach - Name:', e.name);
});

// Some Method -------------------------
// The some() method tests whether at least one element in the array passes the test implemented by the provided function. It returns a Boolean value.
const someTypes = business.some((e) => {
  return e.start >= 2011;
});
console.log('someTypes', someTypes);

// Every Method -------------------------
// The every() method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.
const everyTypes = business.every((e) => {
  return e.start >= 1981;
});
console.log('everyTypes', everyTypes);

// Reduce Method -------------------------
// The reduce() method reduces the array to a single value.
//This method executes a provided function for each value of the array (from left-to-right).
const revenueTotal = business.reduce((currentTotal, e) => {
  return e.revenue + currentTotal;
}, 0);
console.log('revenueTotal', revenueTotal);

// Includes Method -------------------------
//The includes() method determines whether an array contains a specified element. Returning true or false as appropriate.
const includesTypes = business.includes(business.category);
console.log('revenueTotal', includesTypes);

// Sort Method -------------------------
//The sort() method sorts the elements of an array in place and returns the sorted array. The default sort order is ascending
const sortCategory = business.sort((c1, c2) => (c1.category > c2.category ? 1 : -1));
console.log(sortCategory);

const sortRevenue = businessRevenue.sort((c1, c2) => c2.revenue - c1.revenue).map((e) => `${e.name} Revenue: $${e.revenue}M`);
console.log(sortRevenue);
